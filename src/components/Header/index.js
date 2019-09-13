import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
import Nav from "../Nav"

function Header() {
  const { fundo } = useStaticQuery(graphql`
    query {
      fundo: file(relativePath: { eq: "bg-main.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <S.Wrapper fluid={fundo.childImageSharp.fluid}>
      <S.FirstFold>
        <Nav />
      </S.FirstFold>
    </S.Wrapper>
  )
}

export default Header
