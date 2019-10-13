import styled from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.div`
  text-align: center;
`
export const AvatarWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 4px solid var(--secondary-color);
`
export const AvatarImage = styled(Img)`
  transform: scale(1.05);
`
export const InfoWrapper = styled.div`
  color: var(--darker);
`
export const InfoName = styled.p`
  margin: 0.625rem 0 0 0;
  font-size: ${30 / 16}rem;
  font-weight: 600;
`
export const InfoPosition = styled.span`
  display: block;
  margin: 0.3rem 0 ${40 / 16}rem 0;
  font-size: ${25 / 16}rem;
  font-weight: 400;
  opacity: 0.8;
`
