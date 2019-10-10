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
            <p>Welcome to Goody Two Spoons</p>
            <p className={styles.homePageHeader}>Taste our amazing cakes</p>
            <Link to="/menu" className="link headerLink">
              View our delicious products
            </Link>
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
