import styled from "styled-components"
import { Menu } from "styled-icons/material/Menu"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  max-width: 102.5rem;
  padding-top: 1.25em;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavLogo = styled(Link)`
  & > img {
    height: 6.25rem;
  }
`
