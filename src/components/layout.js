import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.css"

const Layout = ({ children, homePage }) => (
  <>
    <Header homePage={homePage} />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  homePage: PropTypes.bool,
}

export default Layout
