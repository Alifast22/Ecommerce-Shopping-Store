import React from "react";
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import {mobile} from "../pages/Responsive"
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import { Sidebar } from "./Sidebar";
import Carousel from "./Carousel";
import { useState } from "react";
import NotificationCenter from '../pages/notif'
const Container = styled.div`
  background-color: black;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  
  @media (max-width:600px){
  .icon{
    font-size: 20px;
  }
  .Search{
    display: none;
  }
  width: 100%;
};
@media (min-width:600px){
  .Nav{
    display: none;
  }


};

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items:center;

  `;
const Center = styled.div`
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

const Input = styled.input`
  border: none;
  height: 24px;
  margin-right:5px;
  border-radius: 10px;
  margin-left: 10px;
  ${mobile({display:"none"})}
`
const Heading= styled.h1`
  font-weight: bold;
  font-family: san-serif;
  ${mobile({fontSize:"24px"})}

`
const Para= styled.p`
 font-size: 16px;
 font-weight: lighter;
 padding: 10px;
 ${mobile({display:"none"})}

`




const Navbar = () => {

  const [comp,setComp]=useState(false);
  const [openside,setOpenside]=useState(false);
  const [user,setUser]=useState(localStorage.getItem("user"))
  console.log(openside)
  return (
    <>
    <Container>
      <Right>
        
        <FormatAlignJustifyIcon style={{fontSize:"20px",margin:"0px 5px 2px 10px"} } className="Nav" onClick={()=>{setOpenside(!openside)}}/>
        <Para className="EN" style={{border:"1pt solid white"}}>EN</Para>
       <Link to={"/Home"} style={{textDecoration:"none",color:"white",marginLeft:"2rem"}}>HOME</Link>
      </Right>
      <Center>
        <Heading>Expo Store.</Heading>
      </Center>
      <Left>
       {user && <Para><NotificationCenter/></Para>}
        {!user &&
        <Para><Link style={{color:"white",textDecoration:"none"}} to={"/Register"}>REGISTER</Link></Para>}
        {!user && <Para><Link style={{color:"white",textDecoration:"none"}} to={"/Login"}>SIGN IN</Link></Para>}
      {user && <Link to={"/Cart"} style={{color:"white"}}> <ShoppingCartOutlinedIcon  className="icon"/></Link>}
      {user && <Para><Link to={"/Login"} style={{color:"white",textDecoration:"none"}} onClick={()=>{localStorage.setItem("user",'');localStorage.setItem("id",'')}}>LOGOUT</Link></Para>}

      </Left>
    </Container>
      {openside && <Sidebar/>}
      </>
    
  );
};

export default Navbar;
