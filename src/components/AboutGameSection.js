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

      <p>
        Velox is a new free to play 2D arena shooter, filled with hectic action
        and crazy weapons. The game features several game modes and maps,
        ranging from simple Death Match to our own custom made mode called Base
        Shooting.
      </p>

      <div className={styles.features}>
        <div>
          <h2>Fun gameplay</h2>
          <p>
            Velox is suitable both as a casual multiplayer game for short
            sessions or even a whole evening with your friends.
          </p>
        </div>

        <div>
          <h2>Every match is unique</h2>
          <p>
            Velox has many game modes and also different maps with unique
            gameplay mechanics such jetpacks.
          </p>
        </div>

        <div>
          <h2>Free to play version</h2>
          <p>
            Velox has a free to play version containing two game modes and a
            handful of maps so anyone can play!
          </p>
        </div>

        <div>
          <h2>Cross platform</h2>
          <p>
            Velox will be available on PC (Windows), Nintendo Switch,
            PlayStation 4 and Xbox One.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default AboutGameSection
