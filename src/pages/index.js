import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import WhatsappButton from "../components/WhatsappButton"
import MenuIcon from "../components/MenuIcon"
import Header from "../components/Header"
import ServicesCircle from "../components/ServicesCircle"
import Team from "../components/Team"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Header />
      <ServicesCircle />
      <Team />
      <Contact />
      <Footer />
      <WhatsappButton />
      <MenuIcon />
    </Layout>
  )
}

export default IndexPage
