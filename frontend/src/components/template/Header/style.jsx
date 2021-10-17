import styled from "styled-components";
import { root } from '../../../App/globalStyle';

export const Header = styled.header `
  background-color: #fff;
  padding: 0 15px;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: ${root.shadow};

  h1 {
    font-size: 1.8em;
  }
`