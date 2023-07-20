import { useDescriptions } from "../Container/Container.context";
import { TItemProps } from "./types";

import * as S from "./Item.styles";

export const Item = ({
  label,
  children,
  gridWidth = 3,
  labelHeight,
  contentHeight,
}: TItemProps) => {
  const { descriptionsState } = useDescriptions();

  console.log(descriptionsState);

  return (
    <S.ItemContainer
      layout={descriptionsState.layout}
      gridWidth={gridWidth / descriptionsState.gridWidth}
    >
      <S.Label height={labelHeight}>{label}</S.Label>
      <S.Content height={contentHeight}>{children}</S.Content>
    </S.ItemContainer>
  );
};
