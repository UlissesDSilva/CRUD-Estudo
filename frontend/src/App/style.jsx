import styled from "styled-components";
import { root } from './globalStyle.js'

export const App = styled.div`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  margin: 0;
  display: grid;
  grid-template-columns: ${root.asideWidth} 1fr;
  grid-template-rows: 
    ${root.headerHeight}
    1fr
    ${root.footerHeight};
  grid-template-areas: 
    "logo header"
    "menu content"
    "menu footer";
  height: 100vh;
  background-color: #f5f5f5;

  aside.logo {
    grid-area: logo;
  }

  header {
    grid-area: header;
  }

  aside.menu-area {
    grid-area: menu;
  }

  main {
    grid-area: content;
  }

  footer {
    grid-area: footer;
  }
`