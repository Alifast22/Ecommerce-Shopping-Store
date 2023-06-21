import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import Post from './Post';
import Newsletter from './Newsletter';


const Container=styled.div`
    width: 100%;
    background-color: #808080c5;
    height: 38vh;

    display: flex;
    flex-direction: column;
`
const Text=styled.span`
   color: white;
   padding:10px;
   margin-left: 0rem;
   

`
const Bottom=styled.div`
    background-color: black;
    height: 10vh;
    text-align: center;
    display: flex;
    flex-direction:column;
`
const Icons=styled.div`
display: flex;
justify-content: center;


color: white;
`


export const Sidebar = () => {
  return (
    <Container>
    <Text><Link to={"/Home"} style={{textDecoration:"none",color:"white"}} >Home</Link></Text>
    <Text><Link to={"/Categories"} style={{textDecoration:"none",color:"white"}} >Categories</Link></Text>
    <Text><Link to={"/Post"} style={{textDecoration:"none",color:"white"}} >Products</Link></Text>
    <Text><Link to={"/Newsletter"} style={{textDecoration:"none",color:"white"}} >Newsletter</Link></Text>
    <Text><Link to={"/Home"} style={{textDecoration:"none",color:"white"}} >Signin</Link></Text>
    <Text><Link to={"/Home"} style={{textDecoration:"none",color:"white"}} >Register</Link></Text>
     <Bottom><Text>Copyrights 2022.
        </Text>
        <Icons>
        <FacebookIcon/>
        <InstagramIcon/>
        </Icons>
        </Bottom>
    </Container>
  )
}
