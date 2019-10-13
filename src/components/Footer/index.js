import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  font-size: 1rem;
  line-height: 1.3rem;
  text-align: center;
  margin: 4rem 0;
  color: var(--primary-color);
`

let ano = new Date()
console.log(ano)
function Footer() {
  return (
    <Wrapper>
      <p>2019 &copy; Alrion tech | Todos os Direitos Reservados</p>
    </Wrapper>
  )
}

export default Footer
