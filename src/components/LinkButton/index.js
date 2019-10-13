import React from "react"

import * as S from "./styled"
import icon from "./icon.svg"

function LinkButton({ light, children }) {
  if (light)
    return (
      <S.WrapperButton light>
        {children} <img src={icon} alt="arrow-icon" />
      </S.WrapperButton>
    )
  else
    return (
      <S.WrapperButton>
        {children} <img src={icon} alt="arrow-icon" />
      </S.WrapperButton>
    )
}

export default LinkButton
