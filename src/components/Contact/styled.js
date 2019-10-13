import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import media from "styled-media-query"

export const Wrapper = styled.section`
  text-align: center;
`
export const ContactWrapper = styled(BackgroundImage)`
  margin: 5rem 0 0 0;
  z-index: 0;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`

export const ContactWrapperInner = styled(BackgroundImage)`
  margin: 5rem 0 0 0;
  z-index: 0;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 3rem 0;
`
export const PresentationTitle = styled.h3`
  margin: 0;
  color: var(--primary-color);
  font-size: 2.8125rem;
  font-weight: 400;
  line-height: 3.25rem;
`

export const PresentationText = styled.h3`
  width: 18.75rem;
  margin: 0.625rem auto 2.5rem auto;
  color: var(--grey-color);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8125rem;
`
export const LinksWrapper = styled.div`
  margin: 3rem auto 5rem auto;
  a {
    margin-right: 1.875rem;
    &:last-child {
      margin-right: 0;
    }
  }
`
