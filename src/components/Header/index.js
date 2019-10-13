import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
import Nav from "../Nav"
import MainHeader from "../MainHeader"
import PresentationSection from "../PresentationSection"

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
      <S.HeaderSection>
        <Nav />
        <MainHeader />
      </S.HeaderSection>
      <S.HeaderSection>
        <PresentationSection />
      </S.HeaderSection>
    </S.Wrapper>
  )
}

export default Header
