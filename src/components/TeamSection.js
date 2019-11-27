import React from "react"
import Section from "./Section"
import styles from "./TeamSection.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function TeamSection() {
  // First time using gatsby-image, there has to be a more efficient
  // way to do this...
  const data = useStaticQuery(graphql`
    query ImgQuery {
      joel: file(relativePath: { eq: "team/joel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ben: file(relativePath: { eq: "team/ben.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alex: file(relativePath: { eq: "team/alex.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      john: file(relativePath: { eq: "team/john.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      willy: file(relativePath: { eq: "team/willy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const team = [
    {
      name: "Joel Thunander",
      role: "Project leader, developer",
      img: data.joel,
    },
    {
      name: "Ben Forsrup",
      role: "Developer",
      img: data.ben,
    },
    {
      name: "Álex Pérez",
      role: "Developer",
      img: data.alex,
    },
    {
      name: "John Forsgren",
      role: "Developer",
      img: data.john,
    },
    {
      name: "Willy Liu",
      role: "Art/design, web developer",
      img: data.willy,
    },
  ]

  return (
    <Section name={"The team"}>
      <div className={styles.membersGrid}>
        {team.map(member => (
          <div className={styles.member} key={member.name}>
            <Img
              className={styles.memberImg}
              fluid={member.img.childImageSharp.fluid}
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
