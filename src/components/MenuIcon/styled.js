import styled from "styled-components"
import { Menu } from "styled-icons/material/Menu"

export const WrapperIcon = styled.div`
  height: 70px;
  width: 70px;
  background-color: var(--primary-color);
  padding: 0.85rem;
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: 0 3px 1rem rgba(0, 155, 219, 0.4);
`

export const InnerIcon = styled(Menu)`
  color: white;
  padding: 0;
  width: 100%;
`
