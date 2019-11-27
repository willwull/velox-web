import React from "react"
import styles from "./Section.module.css"

function Section({ name, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>{name}</h1>
        {children}
      </div>
    </section>
  )
}

export default Section
