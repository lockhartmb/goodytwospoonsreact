import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import styles from "./about.module.css"

const About = () => (
  <Layout>
    <div className="about">
      <Section
        className="about"
        styles={styles}
        title={
          <>
            About <span className="accentWord">me</span>
          </>
        }
      >
        <p>
          Hi! My name is Dawna. I started baking gluten-free many years ago, as
          close friends and family members of mine were diagnosed with celiac
          disease and severe gluten allergies.
        </p>
        <p>
          I love a baking or cooking challenge and whatever I make has to taste
          good. Goody Two Spoons is all about celiac-safe, delicious,
          gluten-free treats!
        </p>
      </Section>

      <Section className="ourHistory" title={<>Our History</>}>
        <p>some history</p>
        <p>some other history</p>
      </Section>

      <Section className="quote">
        <p>
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          repellendus tempora ipsam tenetur sequi, excepturi, fuga aliquam
          architecto doloribus sed neque voluptatem voluptatum quia autem odio
          quo adipisci eos voluptates.”
        </p>
        <br />
        <p>Jasmine Dou</p>
      </Section>

      <section>
        <div className="wrapper">
          <p>
            Call us today: <span className="accentWord">807.629.8162</span>
          </p>
          <div className={styles.socialMedia}>
            <p>Follow us:</p>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
