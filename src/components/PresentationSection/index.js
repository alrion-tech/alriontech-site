import React from "react"

import * as S from "./styled"
import { BtnLight } from "../Button"

function PresentationSection() {
  return (
    <S.Wrapper>
      <S.PresentationText>
        Somos uma empresa que atua no ramo de Tecnologia da Informação.
        Atendemos as áreas de Redes de Computadores, Segurança da Informação,
        Sistema de Gestão de TI e Service Desk (GLPI), Cloud Computing e
        Desenvolvimento WEB.
      </S.PresentationText>
      <BtnLight>Conheça nossa história</BtnLight>
    </S.Wrapper>
  )
}

export default PresentationSection
