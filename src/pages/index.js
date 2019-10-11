import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import DessertCard from "../components/dessertCard"
import styles from "./index.module.css"

const Home = () => {
  return (
    <Layout homePage={true}>
      <Section
        title={
          <>
            Goodies that <span className="accentWord">we do</span>
          </>
        }
      >
        <p>
          I make a variety of delicious gluten-free desserts including cupcakes,
          cookies, squares, and wedding cakes.
        </p>
        <div className={styles.menuCaroussel}>
          <DessertCard
            subhead="Cupcakes"
            caption="Cupcakes come in a variety of flavours and sizes."
          />
          <DessertCard
            subhead="Sweets"
            caption="Cookies, tarts, and squares, perfect for entertaining."
          />
          <DessertCard
            subhead="Special Occasions"
            caption="Custom cake orders for weddings, birthdays, and showers."
          />
        </div>
        <Link to="/menu" className="link" activeClassName="active">
          View our products
        </Link>
      </Section>
      <Section title={<>Services</>}>
        <p>Check out some of the custom services I offer.</p>
        <div className={styles.menuCaroussel}>
          <DessertCard
            subhead="Custom mix and match cupcakes"
            caption="Cupcakes come in a variety of flavours and sizes."
          />
          <DessertCard
            subhead="Delivery to any point"
            caption="Cupcakes come in a variety of flavours and sizes."
          />
          <DessertCard
            subhead="Individual solutions"
            caption="Cupcakes come in a variety of flavours and sizes."
          />
        </div>
      </Section>
      <div className="wrapper">
        <h2>This is the home page</h2>
        <p>
          yo yo Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          reiciendis sequi maiores aperiam! Facilis ad beatae ratione vitae
          exercitationem assumenda dolore tempora aspernatur porro inventore.
          Libero odit illo eius veniam!
        </p>
      </div>
    </Layout>
  )
}

export default Home
