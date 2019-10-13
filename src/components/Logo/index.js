import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Layout({ children }) {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Image fixed={logo.childImageSharp.fixed} />
    </>
  )
}

export default Layout
