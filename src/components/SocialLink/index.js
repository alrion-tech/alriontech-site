import React from "react"
import styled from "styled-components"

import { FacebookCircle } from "styled-icons/boxicons-logos/FacebookCircle"
import { Instagram } from "styled-icons/boxicons-logos/Instagram"
import { Twitter } from "styled-icons/boxicons-logos/Twitter"
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare"

const Link = styled.a`
  svg {
    height: 3.875rem;
    color: var(--primary-color);
  }
`

export const FacebookLink = ({ url }) => (
  <Link href={url}>
    <FacebookCircle />
  </Link>
)

export const InstagramLink = ({ url }) => (
  <Link href={url}>
    <Instagram />
  </Link>
)

export const TwitterLink = ({ url }) => (
  <Link href={url}>
    <Twitter />
  </Link>
)

export const LinkedinLink = ({ url }) => (
  <Link href={url}>
    <LinkedinSquare />
  </Link>
)
