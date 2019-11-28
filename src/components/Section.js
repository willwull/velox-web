import React from "react"
import styles from "./Section.module.css"
import { classnames } from "../utils/helpers"

function Section({ name, inverted, children }) {
  const sectionClasses = classnames(styles.section, inverted && styles.inverted)
  return (
    <section className={sectionClasses}>
      <div className={styles.content}>
        <h1>{name}</h1>
        {children}
      </div>
    </section>
  )
}

export default Section
