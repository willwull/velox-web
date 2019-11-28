import React from "react"
import Section from "./Section"
import styles from "./VideoSection.module.css"

// TODO: Placeholder until we have an actual video for our game
const VIDEO_URL = "https://www.youtube.com/embed/GKXS_YA9s7E"

function VideoSection() {
  return (
    <Section name={"Video demo"}>
      <div className={styles.videoContainer}>
        <iframe
          src={VIDEO_URL}
          className={styles.video}
          allowFullScreen
          title="Trailer for the game"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      <p>
        Velox is a new free to play 2D arena shooter, filled with hectic action
        and crazy weapons. The game features several game modes and maps,
        ranging from simple Death Match to our own custom made mode called Base
        Shooting.
      </p>
    </Section>
  )
}

export default VideoSection
