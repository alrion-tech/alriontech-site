import React from "react"

import MenuIcon from "../MenuIcon"
import Logo from "../Logo"

import * as S from "./styled"

function Nav() {
  return (
    <S.Wrapper>
      <S.NavLogo>
        <Logo />
      </S.NavLogo>
      <MenuIcon />
    </S.Wrapper>
  )
}

export default Nav
