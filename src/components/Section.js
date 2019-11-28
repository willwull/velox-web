import React from "react"
import styles from "./Section.module.css"
import { classnames } from "../utils/helpers"

function Section({ name, inverted, fullWidth, children }) {
  const sectionClasses = classnames(
    styles.section,
    inverted && styles.inverted,
    fullWidth && styles.fullWidth
  )
  const contentClasses = classnames(!fullWidth && styles.content)

  return (
    <section className={sectionClasses}>
      <div className={contentClasses}>
        <h1>{name}</h1>
        {children}
      </div>
    </section>
  )
}

export default Section
