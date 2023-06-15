import React from "react";

export type NonEmptyArray<T> = readonly [T, ...T[]];

export interface TFunnelProps<Steps extends NonEmptyArray<string>> {
  steps: Steps;
  step: Steps[number];
  children:
    | React.ReactElement<TStepProps<Steps>>[]
    | React.ReactElement<TStepProps<Steps>>;
}

export type TStepProps<Steps extends NonEmptyArray<string>> = {
  name: Steps[number];
  onEnter?: () => void;
  children: React.ReactNode;
};

export default function Funnel<Steps extends NonEmptyArray<string>>({
  steps,
  step,
  children,
}: TFunnelProps<Steps>) {
  const validChildren = React.Children.toArray(children)
    .filter(React.isValidElement)
    .filter((i: React.ReactElement) =>
      steps.includes(i.props.name ?? "")
    ) as React.ReactElement<TStepProps<Steps>>[];

  const targetStep = validChildren.find((child) => child.props.name === step);

  return <>{targetStep}</>;
}

export const Step = <T extends NonEmptyArray<string>>({
  onEnter,
  children,
}: TStepProps<T>) => {
  React.useEffect(() => {
    onEnter?.();
  }, [onEnter]);

  return <>{children}</>;
};
