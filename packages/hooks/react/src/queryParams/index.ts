import { TRouter } from "../types";

interface Options<T> {
  parser?: (val: string) => T;
  suspense?: boolean;
}

export function useQueryParam<T = string>(
  name: string,
  routerCallback: TRouter
): T | undefined;

export function useQueryParam<T = string>(
  name: string,
  routerCallback: TRouter,
  options: Options<T>
): T | undefined;

export function useQueryParam<T = string>(
  name: string,
  routerCallback: TRouter,
  options?: Options<T>
) {
  const router = routerCallback();

  const value = router.query[name] as string | undefined;

  const isNotParsing =
    typeof options?.parser !== "function" ||
    value === undefined ||
    value === null;

  if (isNotParsing) {
    return value;
  } else {
    return options.parser?.(value);
  }
}
