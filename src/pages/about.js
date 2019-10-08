import React from "react"
import Layout from "../components/layout"
import styles from "./about.module.css"

const About = () => (
  <Layout>
    <section>
      <h2 className={styles.user}>
        About <span className="accentWord">me</span>
      </h2>
      <img src="src/images/515258.png" alt="zig zag" />
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
    </section>
  </Layout>
)

export default About
