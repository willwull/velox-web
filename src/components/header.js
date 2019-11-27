import React from "react"
import VeloxLogo from "../images/logo.png"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={VeloxLogo} alt="Velox logo" />
      <p>Crazy weapons. Hectic action.</p>
    </div>
  )
}

export default Header
