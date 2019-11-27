import React from "react"
import Section from "./Section"
import styles from "./TeamSection.module.css"

import JoelImg from "../images/joel.jpg"
import BenImg from "../images/ben.jpg"
import AlexImg from "../images/alex.jpg"
import JohnImg from "../images/john.jpg"
import WillyImg from "../images/willy.jpg"

const team = [
  {
    name: "Joel Thunander",
    role: "Project leader, developer",
    img: JoelImg,
  },
  {
    name: "Ben Forsrup",
    role: "Developer",
    img: BenImg,
  },
  {
    name: "Álex Pérez",
    role: "Developer",
    img: AlexImg,
  },
  {
    name: "John Forsgren",
    role: "Developer",
    img: JohnImg,
  },
  {
    name: "Willy Liu",
    role: "Art/design, web developer",
    img: WillyImg,
  },
]

function TeamSection() {
  return (
    <Section name={"The team"}>
      <div className={styles.membersGrid}>
        {team.map(member => (
          <div className={styles.member}>
            <img
              className={styles.memberImg}
              src={member.img}
              alt={member.name}
            />
            <div className={styles.memberName}>{member.name}</div>
            <div className={styles.memberRole}>{member.role}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default TeamSection
