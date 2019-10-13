import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { BtnLight } from "../Button"

import * as S from "./styled"
import {
  FacebookLink,
  InstagramLink,
  LinkedinLink,
  TwitterLink,
} from "../SocialLink"

function Contact() {
  const {
    fundo,
    bgCircle,
    contato: {
      siteMetadata: {
        pages: {
          home: {
            fields: {
              contact: { heading, subheading },
            },
          },
        },
      },
    },
  } = useStaticQuery(graphql`
    query {
      fundo: file(relativePath: { eq: "bg-wrapper-contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bgCircle: file(relativePath: { eq: "bg-inner-contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 454) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      contato: site {
        siteMetadata {
          pages {
            home {
              fields {
                contact {
                  heading
                  subheading
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <S.Wrapper>
      <S.ContactWrapper fluid={fundo.childImageSharp.fluid}>
        <S.ContactWrapperInner fluid={bgCircle.childImageSharp.fluid}>
          <S.PresentationTitle>{heading}</S.PresentationTitle>
          <S.PresentationText>{subheading}</S.PresentationText>
          <BtnLight>enviar agora</BtnLight>
        </S.ContactWrapperInner>
      </S.ContactWrapper>
      <S.LinksWrapper>
        <FacebookLink />
        <InstagramLink />
        <TwitterLink />
        <LinkedinLink />
      </S.LinksWrapper>
    </S.Wrapper>
  )
}

export default Contact
