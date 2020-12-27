import React from 'react'
import Header from "../components/header";
import Transition from "../components/transition"
import "./styles.css"
const TemlateWrapper = ({children, location}) => {
 
  return (
    <div className="container">
      <Header/>
      <Transition location={location}>{children}</Transition>
    </div>
  )
}

export default TemlateWrapper
