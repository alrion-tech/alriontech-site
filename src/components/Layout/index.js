import React from "react"
import { createGlobalStyle } from "styled-components"

import style from "./normalize.css"
import * as S from "./styled"

function Layout({ children }) {
  const GlobalStyle = createGlobalStyle`

  @import url(${style});
  body {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    --primary-color: #009BDB;
    --secondary-color: #85DEF2;
    --whatsapp-color: #25D366;
    --grey-color: #575759;
    --darker: #002626
    --light: #F2F2F2;
    --bright: #FFFFFF;

  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  `

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  )
}

export default Layout
