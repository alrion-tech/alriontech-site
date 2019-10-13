import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import * as S from "./styled"

function ImageHero() {
  const { imagem } = useStaticQuery(graphql`
    query {
      imagem: file(relativePath: { eq: "glpi.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <S.WrapperHero>
        <Image fluid={imagem.childImageSharp.fluid} alt="imagem do GLPI" />
      </S.WrapperHero>
    </>
  )
}

export default ImageHero
