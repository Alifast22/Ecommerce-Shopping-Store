import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import NearMeIcon from '@material-ui/icons/NearMe';

const Container = styled.div`
  margin-top: 20px;
   display: flex;
   flex-direction: column;
   background-color: #9dcffa26;
   height: 50vh;
   align-items: center;
   justify-content: center;
`
const Title = styled.h1`
    font-size: 50px;
    font-weight: bold;
    font-family: serif;
`
const Des = styled.p`
    font-weight: lighter;
    font-size: 20px;
    text-align: center;
`
const Info= styled.div`
    display: flex;
    margin-top: 20px;
    width: 50%;
    justify-content: space-around;
    border: none;
    & :focus{
        outline: none;
    }
`
const Input= styled.input`
    flex: 1;
    width: 200px;
    border: none;
    & :focus{
        outline: none;
    }
`
const Btn = styled.button`
    border: none;
    background-color: #059205a9;
    width: 10vh;
    height: 5vh;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const Newsletter = (props) => {
  return (
    <Container style={{}}>
      <Title>Newsletter</Title>
      <Des>To Get Updates From Your Favorie Store Subscribe To Our Newsletter</Des>
      <Info>
      <Input placeholder='Email (eg 123@gmail.com)'/>
      <Btn><NearMeIcon/></Btn>
      </Info>
    </Container>
  )
}

export default Newsletter
