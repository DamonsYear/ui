import React, {
  ForwardedRef,
  MutableRefObject,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { TContainerProps, TInnerProps } from "./types";
import * as S from "./Container.styles";
import { DescriptionsProvider, useDescriptions } from "./Container.context";
import { Unit } from "@damons-ui/css-core";
import { useDamonsUITheme } from "@damons-ui/react-core";

const getUnit = (value: string) => {
  return Object.values(Unit).filter((unit) => value?.includes(unit))[0];
};

function DescriptionsContainer(
  {
    layout = "vertical",
    children,
    labelHeight = "40px",
    contentHeight = "40px",
  }: TContainerProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { descriptionsState, setDescriptionsState } = useDescriptions();

  const cmpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let labelHeightUnit = getUnit(labelHeight);

    let nextLabelHeight = +labelHeight?.replace(
      new RegExp(labelHeightUnit),
      ""
    );

    if (!Unit[labelHeightUnit]) {
      labelHeightUnit = descriptionsState.label.heightUnit;
    }

    if (isNaN(nextLabelHeight)) {
      nextLabelHeight = descriptionsState.label.height;
    }

    let contentHeightUnit = getUnit(contentHeight);

    let nextContentHeight = +contentHeight?.replace(
      new RegExp(contentHeightUnit),
      ""
    );

    if (!Unit[contentHeightUnit]) {
      contentHeightUnit = descriptionsState.content.heightUnit;
    }

    if (isNaN(nextContentHeight)) {
      nextContentHeight = descriptionsState.content.height;
    }

    setDescriptionsState((state) => ({
      ...state,
      layout,
      label: {
        height: nextLabelHeight,
        heightUnit: labelHeightUnit,
      },
    }));
  }, [setDescriptionsState, layout, labelHeight]);

  const Renderer =
    layout === "horizontal"
      ? DescriptionsContainer.Horizontal
      : DescriptionsContainer.Vertical;

  return (
    <DescriptionsProvider layout={layout}>
      {<Renderer ref={ref ?? cmpRef}>{children}</Renderer>}
    </DescriptionsProvider>
  );
}

DescriptionsContainer.Vertical = forwardRef<HTMLDivElement, TInnerProps>(
  function Vertical({ children }, ref: ForwardedRef<HTMLDivElement>) {
    const { theme } = useDamonsUITheme();
    const { setDescriptionsState } = useDescriptions();

    useEffect(() => {
      const nowRef = ref as MutableRefObject<HTMLDivElement | null>;

      if (!nowRef?.current) return;
      const containerWidth = nowRef?.current.getBoundingClientRect().width;

      setDescriptionsState((state) => ({
        ...state,
        containerWidth,
      }));
    }, [ref, setDescriptionsState]);

    return (
      <S.Container ref={ref} borderColor={theme.descriptions.item.borderColor}>
        <S.VerticalBody>{children}</S.VerticalBody>
      </S.Container>
    );
  }
);

DescriptionsContainer.Horizontal = forwardRef<HTMLDivElement, TInnerProps>(
  function Horizontal({ children }, ref) {
    const { theme } = useDamonsUITheme();

    const { setDescriptionsState } = useDescriptions();

    useEffect(() => {
      const nowRef = ref as MutableRefObject<HTMLDivElement | null>;

      if (!nowRef?.current) return;
      const containerWidth = nowRef?.current.getBoundingClientRect().width;

      setDescriptionsState((state) => ({
        ...state,
        containerWidth,
      }));
    }, [ref, setDescriptionsState]);

    return (
      <S.Container ref={ref} borderColor={theme.descriptions.item.borderColor}>
        <S.HorizontalBody>{children}</S.HorizontalBody>
      </S.Container>
    );
  }
);

export const Container = forwardRef<HTMLDivElement, TContainerProps>(
  DescriptionsContainer
);
