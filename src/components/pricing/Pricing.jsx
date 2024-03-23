import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "../../assets/css/price.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <Back title='Feel free to clear your doubts' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing
