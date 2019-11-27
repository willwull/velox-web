import React from "react"
import Section from "./Section"
import styles from "./AboutGameSection.module.css"

// TODO: Placeholder until we have an actual video for our game
const VIDEO_URL = "https://www.youtube.com/embed/GKXS_YA9s7E"

function AboutGameSection() {
  return (
    <Section name={"About the game"}>
      <div className={styles.videoContainer}>
        <iframe
          src={VIDEO_URL}
          className={styles.video}
          allowFullScreen
          title="Trailer for the game"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </Section>
  )
}

export default AboutGameSection
