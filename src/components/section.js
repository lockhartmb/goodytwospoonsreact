import React from "react"
import PropTypes from "prop-types"
import styles from "./section.module.css"

const Section = ({ title, children, backgroundColor }) => {
  return (
    <section
      className={styles.section}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="wrapper">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.shape(),
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  backgroundColor: PropTypes.string,
  styles: PropTypes.shape(),
}

export default Section
