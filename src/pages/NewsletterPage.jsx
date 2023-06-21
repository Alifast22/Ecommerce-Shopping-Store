import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {mobile} from "../pages/Responsive"

const Container=styled.div`
   background-color: #9dcffa81;
   height: 100vh;
`

const NewsletterPage = () => {
  return (
    <Container>
     <Navbar/>
     <Newsletter styled={{marginTop:"0px",height:"100vh"}}/> 
     </Container>
  )
}

export default NewsletterPage
