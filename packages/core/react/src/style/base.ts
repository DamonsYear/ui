import { css } from "css-in-js";
import { CSSProps } from ".";

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
