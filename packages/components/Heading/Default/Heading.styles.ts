import { CSSProps, baseCSS } from "@damons-ui/react-core";
import styled from "css-in-js";

export const Heading = styled.h6<CSSProps>`
  ${(props) => baseCSS(props)}
`;
