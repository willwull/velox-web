import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header"
import Layout from "../components/Layout"
import TeamSection from "../components/TeamSection"
import AboutGameSection from "../components/AboutGameSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <AboutGameSection />
    <TeamSection />
  </Layout>
)

export default IndexPage
