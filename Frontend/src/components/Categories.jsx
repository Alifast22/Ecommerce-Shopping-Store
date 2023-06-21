import React from "react";
import styled from "styled-components";
import {mobile} from "../pages/Responsive"
import {Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  background-color: #9dcffa26;
  padding: 10px;
   position: relative;
   z-index: 1;
  ${mobile({display:"inline-block"})}
`;
const Des = styled.h1`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  color:white;
  ${mobile({fontSize:"24px"})}

`;
const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: top;
  position: relative;
  z-index: 1;
  overflow: hidden;
  ${mobile({width:"23rem"})}
`;
const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 50%;
  height: 50vh;
  margin: 10px;
  position: relative;
  cursor: pointer;
   
`;
const Info = styled.div`
  position: absolute;
  top: 150px;
  left: 110px;
  width: 100%;
  z-index: 1;
 
  /* border: solid 1pt black; */
`

const But = styled.button`
  background-color: #ffffffab;
  height: 30px;
  width: 100px;
  margin-left: 30px;
  border: none;
  color: black;
  cursor: pointer;
  ${mobile({marginLeft: "15px"})}
  & :hover {
    transform: scale(1.05);
  } 
  transition: all 1.5s ease;  
`;
const Categories = () => {
  const redirect=(category) =>{
    window.location.href=`/Products?category=${category}`;
  };
  return (
    <Container>
      <Card>
        <Image src="https://cf.ltkcdn.net/mens-fashion/images/std/207658-800x534r1-The-carefree-guy.jpg" />
        <Info>
        <Des>Casual Wear</Des>
        <But>
          
          <Link to="/products/casual" style={{textDecoration:"none",color:"black"}}>Shop Now</Link>
        </But>
        </Info>
      </Card>
      <Card>
        <Image src="https://qph.cf2.quoracdn.net/main-qimg-fb6473078664ce949152500d5922453b-lq" />
        <Info>
        <Des>Formal Wear</Des>
        <But>
          <Link to="/products/formal" style={{textDecoration:"none",color:"black"}}>Shop Now</Link>
        </But>
        </Info>
      </Card>
      <Card>
        <Image src="https://threadcurve.com/wp-content/uploads/2020/06/fashion-accessories-for-men-june72020-1-min.jpg" />
        <Info>
        <Des>Accessories</Des>
         <But>  <Link to="/products/accessories" style={{textDecoration:"none",color:"black"}}>Shop Now</Link></But>
         </Info>      
      </Card>
    </Container>
  );
};

export default Categories;
