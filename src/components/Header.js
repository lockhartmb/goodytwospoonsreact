import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navigation from "../components/navigation"
import styles from "./header.module.css"

const Header = ({ homePage }) => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <Navigation />
        {homePage && (
          <>
            <h1 className={styles.homePageHeader}>Taste our amazing cakes</h1>
            <Link className="link headerLink">View our delicious products</Link>
          </>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  homePage: PropTypes.bool,
}

export default Header
