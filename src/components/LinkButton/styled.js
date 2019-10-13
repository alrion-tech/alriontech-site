import styled from "styled-components"
import { Link } from "gatsby"
import { ArrowRight } from "styled-icons/feather/ArrowRight"

export const WrapperButton = styled(Link)`
  margin-top: 0.7rem;
  display: block;
  min-width: 100px;
  text-align: center;
  padding: 0;
  font-size: 1.125rem;
  text-decoration: none;
  font-weight: 500;
  color: var(--grey-color);
  & > img {
    margin-left: 0.625rem;
    vertical-align: middle;
  }
`
