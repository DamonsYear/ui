import { useDescriptions } from "../Container/Container.context";
import { TItemProps } from "./types";

import * as S from "./Item.styles";

export const Item = ({ label, children, gridWidth = 3 }: TItemProps) => {
  const { descriptionsState } = useDescriptions();

  return (
    <S.ItemContainer
      layout={descriptionsState.layout}
      gridWidth={gridWidth / descriptionsState.gridWidth}
    >
      <header>{label}</header>
      <div>{children}</div>
    </S.ItemContainer>
  );
};
