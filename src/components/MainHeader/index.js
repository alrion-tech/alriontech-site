import React from "react"

import * as S from "./styled"
import { BtnPrimary } from "../Button"
import LinkButton from "../LinkButton"
import ImageHero from "../ImageHero"

function MainHeader() {
  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.MainHeading>
          Soluções de TI humanizado mais adequado para seu negócio alcançar os
          objetivos
        </S.MainHeading>
        <S.CallToAcion>
          <BtnPrimary>solicite seu orçamento</BtnPrimary>
          <LinkButton>Veja nossos cases</LinkButton>
        </S.CallToAcion>
      </S.LeftSide>
      <S.RightSide>
        <ImageHero />
      </S.RightSide>
    </S.Wrapper>
  )
}

export default MainHeader
