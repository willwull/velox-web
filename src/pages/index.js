import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header"
import Layout from "../components/Layout"
import TeamSection from "../components/TeamSection"
import AboutGameSection from "../components/AboutGameSection"
import VideoSection from "../components/VideoSection"
import ScreenshotsSection from "../components/ScreenshotsSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <VideoSection />
    <AboutGameSection />
    <ScreenshotsSection />
    <TeamSection />
  </Layout>
)

export default IndexPage
