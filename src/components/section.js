import React from "react"
import PropTypes from "prop-types"
import styles from "./section.module.css"

const Section = ({ title, children, className }) => {
  console.log(className)
  return (
    <section className={styles.section}>
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
  className: PropTypes.string,
  styles: PropTypes.shape(),
}

export default Section
