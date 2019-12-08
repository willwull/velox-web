import React from "react"
import Section from "./Section"
import styles from "./AboutGameSection.module.css"

function AboutGameSection() {
  return (
    <Section name="About the game" inverted>
      <div className={styles.storySummary}>
        <p>
          In the year 3019, Earth has been destroyed and humanity must find a
          new planet to inhabit. A group of explorers have found an alien planet
          called Velox.
        </p>

        <p>
          However, rival factions have also found the same planet, and the
          planet isn't big enough for everyone, so they must battle each other
          to decide who gets to claim Velox.
        </p>
      </div>

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
            Velox has many game modes and also different maps with fun
            gameplay mechanics such jetpacks and tons of weapons.
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
