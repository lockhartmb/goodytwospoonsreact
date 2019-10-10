import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Squiggle from "../components/squiggle"
import styles from "./navigation.module.css"

const ListLink = props => (
  <li>
    <Link
      to={props.to}
      activeClassName={styles.active}
      className={styles.navigationLink}
    >
      {props.children}
    </Link>
  </li>
)

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {/* <Squiggle /> */}
      {/* <div className="circle"></div> */}
      <ul className={styles.navigationList}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <li>
          <Link className={`${styles.logo} ${styles.navigationLink}`} to="/">
            GoodyTwoSpoons
          </Link>
        </li>
        <ListLink to="/menu/">Menu</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </nav>
  )
}

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Navigation
