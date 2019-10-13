import styled from "styled-components"
import media from "styled-media-query"
import BackgroundImage from "gatsby-background-image"

export const Wrapper = styled(BackgroundImage)`
  background-position: bottom center;
  background-color: transparent;
  background-repeat: repeat-y;
  ${media.lessThan("medium")`
  background-size: contain;
  `}
`

export const HeaderSection = styled.div`
  padding: 0 1rem 0 1rem;
  ${media.greaterThan("104.4rem")`
    padding: 0;
  `}
`
