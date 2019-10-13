import styled from "styled-components"
import { Link } from "gatsby"

export const WrapperButton = styled(Link)`
  display: inline-block;
  min-width: 100px;
  text-align: center;
  padding: 1.25rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  border-radius: 2rem;
  color: var(--bright);
  background-color: var(--primary-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`

export const WrapperButtonLight = styled(WrapperButton)`
  color: var(--primary-color);
  background-color: var(--bright);
  border: 2px solid var(--primary-color);
`
