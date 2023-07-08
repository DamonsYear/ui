import { CSSProps, baseCSS, pseudoCSS } from "@damons-ui/react-core";
import styled from "css-in-js";

export const Title = styled.h6<CSSProps>`
  ${(props) => baseCSS(props)}

  ${(props) => props._hover && pseudoCSS(props._hover, ":hover")}
  ${(props) => props._before && pseudoCSS(props._before, ":before")}
  ${(props) => props._after && pseudoCSS(props._after, ":after")}
`;
