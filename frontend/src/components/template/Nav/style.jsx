import styled from "styled-components";
import { root } from '../../../App/globalStyle'

export const Nav = styled.aside`
  background-color: ${root.bgDark};
  box-shadow: 
    2px 0 10px 0 rgba(0, 0, 0, 0.12),
    2px 0 15px 0 rgba(0, 0, 0, 0.09);

  a {
    display: block;
    text-decoration: none;
    color: #fff;
    padding: 15px;
    font-weight: 300;
    
    &:hover {
      background: linear-gradient(135deg, #07a7e7 0%, #32dac3 100%);
    }

  }

  @media(max-width: 768px) {
    .menu {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .menu a {
      display: inline;
      padding: 10px;
      margin: 0;
    }

    .menu {
      height: 100%;
      justify-content: space-around;
    }
  }
  
`