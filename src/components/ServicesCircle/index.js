import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import db from "../../images/icons/db.svg"
import lock from "../../images/icons/lock.svg"
import cloud from "../../images/icons/cloud.svg"
import cam from "../../images/icons/cam.svg"
import globe from "../../images/icons/globe.svg"
import network from "../../images/icons/network.svg"
import { particlesOptions } from "./particlesOptions"

import * as S from "./styled"

function ServicesCircle() {
  const icons = [
    <img src={db} alt="database" />,
    <img src={lock} alt="segurança" />,
    <img src={cloud} alt="Cloud Computing" />,
    <img src={cam} alt="CFTV" />,
    <img src={globe} alt="Desenvolvimento Web" />,
    <img src={network} alt="Rede Estruturada/Cabeada" />,
  ]
  const { fundo } = useStaticQuery(graphql`
    query {
      fundo: file(relativePath: { eq: "bg-services-croped.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  console.log()
  return (
    <S.Wrapper fluid={fundo.childImageSharp.fluid}>
      <S.InnerWrapper>
        <S.CircleWrapper>
          <S.ParticlesContent params={particlesOptions} />
          <S.RingLightCircle />
          <S.OverlayText>
            <p>
              A Alrion Tech é a solução que você precisa para resolver o
              problema que tem com computadores, redes ou sistemas.
            </p>
          </S.OverlayText>
          <Services
            count={6}
            circleR={350}
            serviceR={35}
            radius={350}
            icons={icons}
          />
        </S.CircleWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  )
}

export default ServicesCircle

function Services({ count, circleR, serviceR, radius, icons }) {
  const pi = Math.PI
  let CircleServices = []
  for (let angle = 0; angle < 2 * pi; angle += (2 * pi) / count) {
    if (angle < count) {
      let out = (
        <S.ServicesIcon
          style={{
            left: circleR - serviceR + radius * Math.cos(angle) + "px",
            top: circleR - serviceR + radius * Math.sin(angle) + "px",
            width: serviceR * 2 + "px",
            height: serviceR * 2 + "px",
          }}
        >
          {icons[Math.floor(angle)]}
        </S.ServicesIcon>
      )

      CircleServices.push(out)
    }
  }
  return CircleServices
}
