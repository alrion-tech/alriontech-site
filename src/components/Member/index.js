import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

function Member({ name, position }) {
  const AvatarPath = name.replace(" ", ".").toLowerCase() + ".jpg"
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: allImageSharp {
        edges {
          node {
            fixed(height: 200, width: 200, fit: CONTAIN) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  const result = avatar.edges.find(element => {
    return element.node.fixed.src.split("/").pop() === AvatarPath
  })
  console.log(result)

  return (
    <S.Wrapper>
      <S.AvatarWrapper>
        <S.AvatarImage
          fixed={result.node.fixed}
          alt={`${name} (${position})`}
        />
      </S.AvatarWrapper>
      <S.InfoWrapper>
        <S.InfoName>
          {name}
          <S.InfoPosition>{position}</S.InfoPosition>
        </S.InfoName>
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default Member
