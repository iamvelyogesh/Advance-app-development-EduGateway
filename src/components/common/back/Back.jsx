import React from "react"
import { useLocation } from "react-router-dom"
import Header from "../header/Header"


const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
    <Header/>
      <section className='back'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
