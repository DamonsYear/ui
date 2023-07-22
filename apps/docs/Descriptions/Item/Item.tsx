import { useDescriptions } from "../Container/Container.context";
import { TItemProps } from "./types";

import * as S from "./Item.styles";
import { useDamonsUITheme } from "@damons-ui/react-core";

export const Item = ({
  label,
  children,
  gridWidth = 3,
  labelHeight,
  contentHeight,
  borderColor,
}: TItemProps) => {
  const { theme } = useDamonsUITheme();
  const { descriptionsState } = useDescriptions();

  return (
    <S.ItemContainer
      borderColor={borderColor ?? theme.descriptions.item.borderColor}
      layout={descriptionsState.layout}
      gridWidth={gridWidth / descriptionsState.gridWidth}
    >
      <S.Label
        layout={descriptionsState.layout}
        height={labelHeight}
        borderColor={borderColor ?? theme.descriptions.label.borderColor}
      >
        {label}
      </S.Label>
      <S.Content
        height={contentHeight}
        borderColor={borderColor ?? theme.descriptions.content.borderColor}
      >
        {children}
      </S.Content>
    </S.ItemContainer>
  );
};
