import styled from "styled-components"
import media from "styled-media-query"
import BackgroundImage from "gatsby-background-image"

export const Wrapper = styled(BackgroundImage)`
  background-position: bottom center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
`

export const FirstFold = styled.div`
  min-height: 100vh;
  ${media.lessThan("104.5rem")`
    padding: 0 1rem 0 1rem;
  `}
`
