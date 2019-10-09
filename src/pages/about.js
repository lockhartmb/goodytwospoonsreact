import React from "react"
import Layout from "../components/layout"
import styles from "./about.module.css"

const About = () => (
  <Layout>
    <div className={styles.about}>
      <section className={styles.aboutMe}>
        <div className="wrapper">
          <h2 className={styles.user}>
            About <span className="accentWord">me</span>
          </h2>
          <img src="src/images/515258.png" alt="zig zag" />
          <p>
            I’m good enough, I’m smart enough, and gosh darn it, people like me!
          </p>
        </div>
      </section>
      <section className={styles.ourHistory}>
        <div className="wrapper">
          <h2>Our History</h2>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2>
            Meet with <span className="accentWord">our professionals</span>
          </h2>
        </div>
      </section>
      <section className={styles.quote}>
        <div className="wrapper">
          <p>
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            repellendus tempora ipsam tenetur sequi, excepturi, fuga aliquam
            architecto doloribus sed neque voluptatem voluptatum quia autem odio
            quo adipisci eos voluptates.”
          </p>
          <br />
          <p>Jasmine Dou</p>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <p>
            Call us today: <span className="accentWord">807.629.8162</span>
          </p>
          <div className={styles.socialMedia}>
            <p>Follow us:</p>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
