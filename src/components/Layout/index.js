import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import style from "./normalize.css"
import * as S from "./styled"

function Layout({ children }) {
  const { fundo } = useStaticQuery(graphql`
    query {
      fundo: file(relativePath: { eq: "bg-main.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, background: "#fff") {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const GlobalStyle = createGlobalStyle`

  @import url(${style});
  body {
    font: Roboto 16px / 22px 400;
    --primary-color: #009BDB;
    --secondary-color: #85DEF2;
    --whatsapp-color: #25D366;
    --light-darker: #575759;
    --darker: #002626
    --light: #F2F2F2;
    --bright: #FFFFFF;

  }
  `

  console.log(fundo)
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  )
}

export default Layout
