import styled from "styled-components"
import { Whatsapp } from "styled-icons/boxicons-logos/Whatsapp"

export const WrapperButton = styled.a`
  z-index: 2;
  position: fixed;
  display: block;
  background-color: var(--bright);
  border: 2px solid var(--whatsapp-color);
  border-radius: 1.875rem;
  bottom: 1.25rem;
  right: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`
export const WrapperIcon = styled.span`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: var(--whatsapp-color);
  vertical-align: middle;
  display: inline-flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  transform: translateX(-2px);
`

export const Icon = styled(Whatsapp)`
  height: 24px;
  color: var(--bright);
  vertical-align: middle;
  text-align: center;
`

export const InnerText = styled.span`
  color: var(--whatsapp-color);
  text-transform: uppercase;
  padding: 0 1.25rem 0 0.625rem;
`
