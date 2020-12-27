import React from 'react'
import Header from "./header"
import styled  from "styled-components"
const Layout = styled.div`
  padding : 3rem 0; 
  width : 80vw ; 
  max-width : 900px; 
  margin : auto;

`
export default props => {  
  return (
   <Layout>
      <Header/>
      {props.children}      
    </Layout>
  )
}

