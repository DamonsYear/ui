import React, {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Funnel, { NonEmptyArray, TFunnelProps, Step } from "./Funnel";
import deepEqual from "fast-deep-equal";
import { useQuery } from "@tanstack/react-query";
import { safeSessionStorage } from "./storage";
import { TRouter } from "../types";

type TFunnelChangeActions = "pop" | "push";

type SetStepOptions = {
  stepChangeType?: TFunnelChangeActions;
  preserveQuery?: boolean;
};

type TRouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<
  TFunnelProps<Steps>,
  "steps" | "step"
>;

const DEFAULT_STEP_KEY = "funnel/step";

export default function useFunnel<Steps extends NonEmptyArray<string>>(
  steps: Steps,
  router: TRouter,
  options?: {
    stepQueryKey?: string;
    initialStep?: Steps[number];
    onStepChange?: (name: Steps[number]) => void;
  }
) {
  const stepKey = options?.stepQueryKey ?? DEFAULT_STEP_KEY;

  const FunnelComponent = React.useMemo(() => {
    return Object.assign(
      (props: TRouteFunnelProps<Steps>) => {
        const step = stepKey ?? options?.initialStep;

        return <Funnel<Steps> steps={steps} step={step} {...props} />;
      },
      {
        Step,
      }
    );
  }, []);

  const setStep = React.useCallback(
    (step: Steps[number], setStepOptions?: SetStepOptions) => {
      switch (setStepOptions?.stepChangeType) {
        case "pop":
          return;
        case "push":
        default:
          return;
      }
    },
    [options]
  );

  type S = Record<string, unknown>;
  type TStep = Steps[number];

  const [state, _setState] = useFunnelState<S>({}, router);

  type TNextState = S & { step?: TStep };

  const nextPendingStepRef = React.useRef<TStep | null>(null);
  const nextStateRef = React.useRef<Partial<S> | null>(null);

  const setState = useCallback(
    (
      next: Partial<TNextState> | ((next: Partial<TNextState>) => TNextState)
    ) => {
      let nextStepValue: Partial<TNextState>;

      if (typeof next === "function") {
        nextStepValue = next(state);
      } else {
        nextStepValue = next;
      }

      if (nextStepValue.step !== null && nextStepValue.step !== undefined) {
        nextPendingStepRef.current = nextStepValue.step;
      }
      nextStateRef.current = nextStepValue;

      _setState(next);
    },
    [_setState, state]
  );

  useEffect(() => {
    if (nextPendingStepRef.current === null) {
      return;
    }

    if (deepEqual(nextStateRef.current, state)) {
      setStep(nextPendingStepRef.current);
      nextPendingStepRef.current = null;
    }
  }, [setStep, state]);

  const initializedRef = useRef(false);

  function withState<State extends Record<string, unknown>>(
    initialState: State
  ) {
    if (!initializedRef.current) {
      setState(initialState);
      initializedRef.current = true;
    }

    return [FunnelComponent, state, setState] as const;
  }

  return Object.assign([FunnelComponent, setState] as const, {
    withState,
  });
}

// / INFO: Dlgn...

type FunnelStateId = `use-funnel-state__${string}`;

function createFunnelStateId(id: string): FunnelStateId {
  return `use-funnel-state__${id}`;
}

/**
 * NOTE: 이후 Secure Storage 등 다른 스토리지를 사용하도록 스펙이 변경될 수 있으므로, Asynchronous 함수로 만듭니다.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createFunnelStorage<T>(
  funnelStateId: FunnelStateId,
  storageType = "sessionStorage"
): FunnelStorage<T> {
  switch (storageType) {
    case "sessionStorage":
      return {
        get: async () => {
          const d = safeSessionStorage.get(funnelStateId);
          if (d == null) {
            return null;
          }
          return JSON.parse(d) as Partial<T>;
        },
        set: async (value: Partial<T>) => {
          safeSessionStorage.set(funnelStateId, JSON.stringify(value));
        },
        clear: async () => {
          safeSessionStorage.remove(funnelStateId);
        },
      };
    default:
      throw new Error("정확한 스토리지 타입을 명시해주세요.");
  }
}

interface FunnelStorage<T> {
  get: () => Promise<Partial<T> | null>;
  set: (value: Partial<T>) => Promise<void>;
  clear: () => Promise<void>;
}

function useFunnelState<T extends Record<string, any>>(
  defaultValue: Partial<T>,
  router: () => { pathname: string; basePath: string },
  options?: { storage?: FunnelStorage<T> }
) {
  const { pathname, basePath } = router();

  const storage =
    options?.storage ??
    createFunnelStorage<T>(createFunnelStateId(`${basePath}${pathname}`));
  const persistentStorage = useRef(storage).current;

  const initialState = useQuery({
    queryFn: () => {
      return persistentStorage.get();
    },
    suspense: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  }).data;

  const [_state, _setState] = useState<Partial<T>>(
    initialState ?? defaultValue
  );

  const setState = useCallback(
    (state: SetStateAction<Partial<T>>) => {
      _setState((prev) => {
        /**
         * React Batch Update 그리고 Local State와 Persistent Storage의 State의 일관성을 위해서 이렇게 작성했습니다.
         */
        if (typeof state === "function") {
          const newState = state(prev);
          persistentStorage.set(newState);
          return newState;
        } else {
          persistentStorage.set(state);
          return state;
        }
      });
    },
    [persistentStorage]
  );

  const clearState = useCallback(() => {
    _setState({});
    persistentStorage.clear();
  }, [persistentStorage]);

  return [_state, setState, clearState] as const;
}
