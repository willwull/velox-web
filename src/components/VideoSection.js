import React from "react"
import Section from "./Section"
import styles from "./VideoSection.module.css"

const VIDEO_URL = "https://drive.google.com/file/d/12P9KY75A4cs9uLOv-q4NVRuHXhGAMKfZ/preview"

function VideoSection() {
  return (
    <Section name="Video demo">
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
