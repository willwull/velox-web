import React from "react"
import SEO from "../components/seo"
import VeloxLogo from "../images/logo.png"

const IndexPage = () => (
  <main>
    <SEO title="Home" />
    <img src={VeloxLogo} alt="Velox logo" />
  </main>
)

export default IndexPage
