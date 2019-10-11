import React from "react"
import PropTypes from "prop-types"
import styles from "./dessertCard.module.css"

const DessertCard = ({ image, subhead, caption }) => {
  return (
    <div className={styles.dessertCard}>
      {/* <img src={image} alt="some dessert" /> */}
      <div className={styles.image}></div>
      <div className={styles.dessertCardContent}>
        <h3>{subhead}</h3>
        <p>{caption}</p>
      </div>
    </div>
  )
}

export default DessertCard

DessertCard.propTypes = {
  image: PropTypes.string.isRequired,
  subhead: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}
