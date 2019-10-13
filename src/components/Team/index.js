import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
import Member from "../Member"

function Team() {
  const { fundo, time } = useStaticQuery(graphql`
    query {
      fundo: file(relativePath: { eq: "bg-team.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      time: site {
        siteMetadata {
          pages {
            home {
              fields {
                team {
                  heading
                  members {
                    name
                    position
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(time.siteMetadata.pages.home.fields.team.members)
  return (
    <S.Wrapper fluid={fundo.childImageSharp.fluid}>
      <S.InnerWrapper>
        <S.PresentationText>
          {time.siteMetadata.pages.home.fields.team.heading}
        </S.PresentationText>
        <S.MembersWrapper>
        {time.siteMetadata.pages.home.fields.team.members.map((member, id) => (
          <Member name={member.name} position={member.position} key={id}/>
        ))}
        </S.MembersWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  )
}

export default Team
