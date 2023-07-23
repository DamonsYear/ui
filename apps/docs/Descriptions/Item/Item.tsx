import { useDescriptions } from "../Container/Container.context";
import { TItemProps } from "./types";

import * as S from "./Item.styles";
import { useDamonsUITheme } from "@damons-ui/react-core";

export const Item = ({
  label,
  children,
  unit = 3,
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
      unit={unit / descriptionsState.unit}
    >
      <S.Label
        layout={descriptionsState.layout}
        borderColor={borderColor ?? theme.descriptions.label.borderColor}
        height={
          labelHeight ??
          descriptionsState.label.height + descriptionsState.label.heightUnit
        }
      >
        {label}
      </S.Label>
      <S.Content
        borderColor={borderColor ?? theme.descriptions.content.borderColor}
        height={
          contentHeight ??
          descriptionsState.content.height +
            descriptionsState.content.heightUnit
        }
      >
        {children}
      </S.Content>
    </S.ItemContainer>
  );
};
