import { css } from "css-in-js";
import { CSSProps } from "./types";
import {
  AdvancedPseudoSet,
  AdvancedPseudosPropKeys,
  BasePseudoSet,
  BasePseudosPropKeys,
  BgCSSPropSet,
  BoxModelCSSPropSet,
  FilterCSSPropSet,
  FlexCSSPropSet,
  ImgCSSPropSet,
  LayoutCSSPropSet,
  OtherCSSPropSet,
  OverflowCSSPropSet,
  PositionCSSPropSet,
  TextCSSPropSet,
  TransformCSSPropSet,
  TransitionCSSPropSet,
  VisibilityCSSPropSet,
  transformStyleProp,
  union,
} from "@damons-ui/css-core";
import { pseudoPropsCSS } from "./pseudo";
import { Pseudos } from "csstype";

export const styleSet = union(
  BgCSSPropSet,
  ImgCSSPropSet,
  OtherCSSPropSet,
  LayoutCSSPropSet,
  FlexCSSPropSet,
  PositionCSSPropSet,
  TextCSSPropSet,
  FilterCSSPropSet,
  BoxModelCSSPropSet,
  OverflowCSSPropSet,
  TextCSSPropSet,
  TransformCSSPropSet,
  TransitionCSSPropSet,
  VisibilityCSSPropSet
);

export const basePropsCSS = (props: CSSProps) => css<CSSProps>`
  ${Object.keys(props)
    .filter(
      (propKey) =>
        union(styleSet, BasePseudoSet, AdvancedPseudoSet).has(propKey) &&
        props[propKey as keyof CSSProps] !== undefined
    )
    .map((propKey) => {
      const value = props[propKey as keyof CSSProps] as CSSProps;

      if (
        union(BasePseudoSet, AdvancedPseudoSet).has(
          propKey as AdvancedPseudosPropKeys | BasePseudosPropKeys
        )
      ) {
        return pseudoPropsCSS(value, transformStyleProp(propKey) as Pseudos);
      }

      if (!value) return "";

      return `${transformStyleProp(propKey)}: ${value};`;
    })}
`;

export const getStyledConfig = (prop: string) => !styleSet.has(prop);

export const baseCSS = (props: CSSProps) => css<CSSProps>`
  box-sizing: ${props.boxSizing};
  z-index: ${props.zIndex};

  display: ${props.display};
  flex-direction: ${props.flexDirection};
  justify-content: ${props.justifyContent};
  align-items: ${props.alignItems};

  align-self: ${props.alignSelf};
  justify-self: ${props.justifySelf};

  position: ${props.position};
  top: ${props.top};
  right: ${props.right};
  bottom: ${props.bottom};
  left: ${props.left};

  width: ${props.width};
  max-width: ${props.maxWidth};
  min-width: ${props.minWidth};

  height: ${props.height};
  max-height: ${props.maxHeight};
  min-height: ${props.minHeight};

  margin: ${props.margin};
  margin-top: ${props.marginTop};
  margin-right: ${props.marginRight};
  margin-bottom: ${props.marginBottom};
  margin-left: ${props.marginLeft};

  padding: ${props.padding};
  padding-top: ${props.paddingTop};
  padding-right: ${props.paddingRight};
  padding-bottom: ${props.paddingBottom};
  padding-left: ${props.paddingLeft};

  border: ${props.border};
  border-width: ${props.borderWidth};
  border-style: ${props.borderStyle};
  border-radius: ${props.borderRadius};

  line-height: ${props.lineHeight};
  color: ${props.color};
  font-size: ${props.fontSize};
  font-weight: ${props.fontWeight};
  font-family: ${props.fontFamily};
  letter-spacing: ${props.letterSpacing};

  background: ${props.background};
  background-color: ${props.backgroundColor};

  opacity: ${props.opacity};

  transform: ${props.transform};
  transform-origin: ${props.transformOrigin};
  transition: ${props.transition};

  visibility: ${props.visibility};
`;
