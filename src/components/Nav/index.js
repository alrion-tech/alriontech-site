import React from "react"

import MenuIcon from "../MenuIcon"

import logo from "../../images/logo.svg"
import * as S from "./styled"

function Nav() {
  return (
    <S.Wrapper>
      <S.NavLogo>
        <img src={logo} alt="Alrion Tech" />
      </S.NavLogo>
      <MenuIcon />
    </S.Wrapper>
  )
}

export default Nav
