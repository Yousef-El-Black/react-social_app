import styled from "styled-components";

import { mobile } from "../../responsive";

export const LayoutContainer = styled.div`
  min-height: 100vh;

  ${mobile({ minHeight: "calc(100vh + 100px)" })}
`;
