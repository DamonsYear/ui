import { css } from "css-in-js";
import { CSSProps } from ".";

export const baseCSS = () => css<CSSProps>`
  box-sizing: ${(props) => props.boxSizing};
  z-index: ${(props) => props.zIndex};

  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};

  align-self: ${(props) => props.alignSelf};
  justify-self: ${(props) => props.justifySelf};

  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};

  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};

  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};

  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};

  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-right: ${(props) => props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};

  border: ${(props) => props.border};
  border-width: ${(props) => props.borderWidth};
  border-style: ${(props) => props.borderStyle};
  border-radius: ${(props) => props.borderRadius};

  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  letter-spacing: ${(props) => props.letterSpacing};

  background: ${(props) => props.background};
  background-color: ${(props) => props.backgroundColor};

  opacity: ${(props) => props.opacity};

  transform: ${(props) => props.transform};
  transform-origin: ${(props) => props.transformOrigin};
  transition: ${(props) => props.transition};

  visibility: ${(props) => props.visibility};
`;
