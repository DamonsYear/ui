import React, { useEffect } from "react";
import { TContainerProps } from "./types";
import * as S from "./Container.styles";
import { DescriptionsProvider, useDescriptions } from "./Container.context";

export const Container = ({ layout, children }: TContainerProps) => {
  const { setDescriptionsState } = useDescriptions();

  useEffect(() => {
    console.log(layout);
    setDescriptionsState((state) => ({
      ...state,
      layout,
    }));
  }, [setDescriptionsState, layout]);

  const Renderer =
    layout === "horizontal" ? Container.Horizontal : Container.Vertical;

  return (
    <DescriptionsProvider layout={layout}>
      {<Renderer layout={layout}>{children}</Renderer>}
    </DescriptionsProvider>
  );
};

Container.Vertical = function Vertical({ children }: TContainerProps) {
  return (
    <S.Container>
      <S.VerticalBody>{children}</S.VerticalBody>
    </S.Container>
  );
};

Container.Horizontal = function Horizontal({ children }: TContainerProps) {
  return (
    <S.Container>
      <S.HorizontalBody>{children}</S.HorizontalBody>
    </S.Container>
  );
};
