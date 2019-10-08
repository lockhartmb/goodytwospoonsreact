import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>
      <div className="wrapper">{children}</div>
    </main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default Layout
