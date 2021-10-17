import styled from "styled-components";
import { root } from '../../../App/globalStyle'

export const Logo = styled.aside `
  background-color: ${root.bgDark};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding: 0px 15px;
    width: 100%;
  }

  @media(max-width: 576px){
    .logo img {
      width: 350px;
    }
  }
`