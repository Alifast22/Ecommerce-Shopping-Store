import React from 'react'
import styled from 'styled-components'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useState } from 'react';
import { mobile } from '../pages/Responsive'; 
import { Sidebar } from './Sidebar';
import { Link } from 'react-router-dom';

const Container= styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  ${mobile({height:"70vh"})}
`
const Arrow= styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    color:black;
    left: ${props => props.direction === "left" && '10px'};
    right: ${props=> props.direction === "right" && '10px'};
    cursor: pointer;
   // z-index: 9;

`
const Slide= styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
`
const Wrapper= styled.div`
    display: flex;
    width: 200%;
    transform: translateX(${props=>props.slideindex * -100}vw);
    transition: all 1.5s ease;
`
const Imgcont=styled.div`
   display: flex;
   
`
const IMG= styled.img`
    
    flex: 1;
    width: 100%;
    height: 90vh;
    ${mobile({width:"10rem",height:"60vh",objectFit:"cover"})}

`
const Descrip= styled.div`
    flex: 1;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-style: serif;
    ${mobile({ justifyContent:"flex-start",marginTop:"5rem"})}


`
const Title=styled.h1`
    font-size: 60px;
    font-family: 'Times New Roman', Times, serif;
    ${mobile({fontSize:"30px"})}
    
`
const Para= styled.p`
    font-weight: lighter;
    font-size: 30px;
    ${mobile({fontSize:"15px",marginLeft:"15px"})}

`
const But= styled.button`

    background-color: #54a4e694;
    width: 100px;
    height: 30px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
`
const Carousel = (props) => {
   const [slideindex,setSlideindex] = useState(0);
   const Handle = (direction) =>{
      if(direction==="left")
      {
        setSlideindex(slideindex > 0 ? slideindex-1 : 1)
      }
      else{
        setSlideindex(slideindex < 1 ? slideindex+1 : 0) 
      }
   }

 
  return (
    <>  
    <Container>
    {props.openside && <Sidebar/>}
    {!props.openside && <>
        <Arrow direction="left" onClick={()=>Handle("left")}>
      <ChevronLeftIcon style={{"font-size": "50px"}}/> 
      </Arrow>
      <Wrapper slideindex={slideindex}>
      <Slide>
      
        <Imgcont>
        <IMG src="https://i.pinimg.com/550x/75/dc/d6/75dcd6e73dbaa920966e0d919fc60dc1.jpg"/>
        </Imgcont>
        <Descrip>
         <Title>Men Section</Title>
         <Para>Avail Exclusive Discounts of Upto 20%<br/> For Limited Edition Only!!!</Para>
         <But><Link to={"/Categories"} style={{textDecoration:"none",color:"white"}}>Shop Now</Link></But>
        </Descrip>
      </Slide>
      <Slide>
        <Imgcont>
        <IMG src="https://ae01.alicdn.com/kf/HTB1hIpbQpXXXXcDXFXXq6xXFXXXN/2017-european-fashion-summer-clothing-women-White-background-black-square-tight-chiffon-dress-Boho-college-wind.jpg"/>
        </Imgcont>
        <Descrip>
         <Title>Women Section</Title>
         <Para>Avail Exclusive Discounts of Upto 20%<br/> For Limited Edition Only!!!</Para>
         <But><Link to={"/Categories"}>Shop Now</Link></But>
        </Descrip>
      </Slide> 
      
      </Wrapper>     
      <Arrow direction="right" onClick={()=>Handle("right")}>
      <ChevronRightIcon style={{"font-size": "50px"}}/> 
      </Arrow> </>}
    </Container>  
    </>
  )
}

export default Carousel
