import React, { useState, useRef } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Section from "./Section"
import styles from "./ScreenshotsSection.module.css"
import createDebouncedFunc, { classnames } from "../utils/helpers"

function ScreenshotsSection() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "screenshots" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const imageNodes = data.allFile.edges.map(obj => obj.node)

  const [hasReachedStart, setHasReachedStart] = useState(true)
  const [hasReachedEnd, setHasReachedEnd] = useState(false)
  const scrollRef = useRef()

  const onScroll = createDebouncedFunc(event => {
    const elem = scrollRef.current
    const hasScrolledToStart = elem.scrollLeft <= 0
    const hasScrolledToEnd =
      elem.scrollLeft >= elem.scrollWidth - elem.offsetWidth
    setHasReachedStart(hasScrolledToStart)
    setHasReachedEnd(hasScrolledToEnd)
  })

  const containerStyles = classnames(
    styles.container,
    hasReachedStart && styles.atStart,
    hasReachedEnd && styles.atEnd
  )

  return (
    <Section name="Screenshots" fullWidth>
      <div className={containerStyles}>
        <div className={styles.startOverlay} />
        <div
          ref={scrollRef}
          className={styles.scrollerContainer}
          onScroll={onScroll}
        >
          {imageNodes.map(node => (
            <Img fluid={node.childImageSharp.fluid} />
          ))}
          <div className={styles.endPadding} />
        </div>
        <div className={styles.endOverlay} />
      </div>
    </Section>
  )
}

export default ScreenshotsSection
