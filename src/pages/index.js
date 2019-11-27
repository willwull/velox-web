import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Section from "../components/Section"
import TeamSection from "../components/TeamSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <TeamSection />
  </Layout>
)

export default IndexPage
