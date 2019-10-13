import React from "react"

import Logo from "../Logo"

import * as S from "./styled"

function Nav() {
  return (
    <S.Wrapper>
      <S.NavLogo>
        <Logo />
      </S.NavLogo>
    </S.Wrapper>
  )
}

export default Nav
