import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import media from "styled-media-query"

import Particles from "react-particles-js"

export const Wrapper = styled(BackgroundImage)`
  z-index: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${media.greaterThan("medium")`
  background-size: contain !important;
  `}
`
export const InnerWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
export const CircleWrapper = styled.div`
  transform: scale(0.45);
  border: 1px solid rgba(87, 87, 89, 0.5);
  border-radius: 50%;
  background-color: white;
  position: relative;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);
  ${media.greaterThan("medium")`
    transform: scale(0.8);
  `}
  ${media.greaterThan("huge")`
    transform: scale(1);
  `}
`
export const ParticlesContent = styled(Particles)`
  height: 700px;
  width: 700px;
  border-radius: 50%;
  overflow: hidden;
`
export const RingLightCircle = styled.div`
  position: absolute;
  top: 0;
  left: -2px;
  height: 700px;
  width: 700px;
  border-radius: 50%;
  border: 4px solid var(--secondary-color);
  border-left: transparent;
  border-top: transparent;
  border-bottom: transparent;
  animation-name: rotate;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`
export const OverlayText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--grey-color);
  & p {
    padding: 4.6rem;
    font-size: 3.2rem;
    line-height: 3.9rem;
    text-align: center;
    font-family: Roboto, sans-serif;
  }
`
export const ServicesIcon = styled.div`
  border: 1px solid #575759;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
