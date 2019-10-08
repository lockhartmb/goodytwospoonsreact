import React from "react"
import Navigation from "../components/navigation"
import styles from "./header.module.css"

export default () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <Navigation />
      </div>
    </header>
  )
}
