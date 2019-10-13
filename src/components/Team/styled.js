import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import media from "styled-media-query"

export const Wrapper = styled(BackgroundImage)`
  margin: 5rem 0;
  z-index: 0;
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
`
export const InnerWrapper = styled.section`
  padding: 2.5rem 1rem;
  min-height: calc(47.5rem - 5rem);
  text-align: center;
`

export const PresentationText = styled.h3`
  margin: 0;
  color: var(--primary-color);
  font-size: 1.5625rem;
  font-weight: 400;
  line-height: 2.5rem;
`
export const MembersWrapper = styled.div`
  margin-top: ${40 / 16}rem;
`
