import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.nav`
  max-width: 102.5rem;
  padding-top: 3.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
export const NavLogo = styled(Link)`
  & > img {
    height: 6.25rem;
  }
`
