import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Shape from "./shape.js"
import styles from "./navigation.module.css"

const ListLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      activeClassName={styles.active}
      className={styles.navigationLink}
    >
      {children}
    </Link>
  </li>
)

const Navigation = ({ homePage }) => {
  return (
    <div className={styles.flexbox}>
      <Shape />
      <nav
        className={`${styles.navigation} {${homePage} && ${styles.homeNavigation}`}
      >
        <ul className={styles.navigationList}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
          <li>
            <Link className={`${styles.logo} ${styles.navigationLink}`} to="/">
              <h1>GoodyTwoSpoons</h1>
            </Link>
          </li>
          <ListLink to="/menu">Menu</ListLink>
          <ListLink to="/contact">Contact</ListLink>
        </ul>
      </nav>
      <Shape />
    </div>
  )
}

Navigation.propTypes = {
  homePage: PropTypes.bool,
}

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Navigation
