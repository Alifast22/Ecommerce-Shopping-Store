
import React, { useState,useEffect } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Project from './Project';
import Products from './Products';

import axios from 'axios'
import Deductions from './Deductions';
const Navbar=styled.div`
  background-color: #6298ad;
  display: flex;
  justify-content: space-around;
  color: white;
  height: 10vh;
  text-align: end;
`
const Title= styled.span`
    flex: 1;
    display: flex;
    align-self: flex-start;
    margin-left: 20px;
    margin-right: 40px;
    margin-top: 15px;
    font-size: 24px;
`
const Titlecont=styled.div`
    display: flex;
    align-items: center;
    text-align: center;

`
const Profile=styled.div`
   flex: 1;
   
   margin-right: 30px;
   display: flex;
   justify-content: end;
   align-items: center ;
`
const ProfileName= styled.span`
   font-weight:300;
   margin-left: 10px;
   
`
const Circle=styled.img`
    border-radius: 50px;
    width: 50px;
    height: 50px;
    object-fit: cover;
`
const Circle2=styled.img`
    height: 10vh;
    width: 10vh;
    border-radius: 10px;
    object-fit: cover;
`
const Circlesmall=styled.div`
    height: 7px;
    width: 7px;
    border-radius: 50px;
    background-color: #3bd33b;
    margin-right: 10px;
`
const Onlinecont=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Page=styled.div`
    display: flex;
`
const Sidebar=styled.div`
    flex: 1;
    width: 100%;
    height: 100vh;
    background-color: #272727;
    display: flex;
    flex-direction: column;
`
const TextCon=styled.div`
     background-color: #4c4c63;
     height: auto;
     padding:10px;
`
const Text=styled.a`
    color: #a09595;
    text-decoration: none;
`
const HeadText=styled.a`
    color: #a09595;
    text-decoration: none;
    font-size: 14px;
`
const Headcon=styled.div`
    background-color: #272727;
    height: 40px;
    padding: 10px;
`
const Main=styled.div`
    flex: 5;
    background-color: #d4dee9;
    display: flex;
    flex-direction: column;


`


const Home = () => {

    const [value,setValue]=useState(true);
    const [display,Setdisplay]=useState({attendance:true})
    const [data,setData]=useState()
    console.log(value)
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    }

   const HandleLogout = () => {
      localStorage.setItem("admin",null)
      window.location.replace("/AdminLogin")
   }    
    
   const handlePush = async () => {
    const response = await axios.post('http://localhost:5000/Push/api/push', {
      title,
      message,
    });
    console.log(response.data);
  };

  return (
    <>

    <Navbar>
     <Titlecont>   
    <Title >Payroll 2022</Title>
    <i class="bi bi-list" style={{fontSize:'24px'}} onClick={()=>setValue(!value)}></i>
    </Titlecont>
    <Profile>
    <Circle src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_jBNGDAl_gCziVLX5q8vuci3Z8VmfK8Rrdtct54&s'></Circle>   
     <ProfileName>{localStorage.getItem('admin')}</ProfileName> 
     </Profile>
     <Button onClick={()=>{HandleLogout()}} style={{color:'white'}}>Logout</Button>
    </Navbar>
    <Page>
 {value &&
    <Sidebar>
    <TextCon>
    <Circle2 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_jBNGDAl_gCziVLX5q8vuci3Z8VmfK8Rrdtct54&s'></Circle2>   
    <Onlinecont><Circlesmall/><span style={{color:'#b8a9a9',fontSize:'12px'}}>Online</span></Onlinecont>        
    </TextCon>
    <Headcon>
    <HeadText href='#' >Reports</HeadText>
    </Headcon>    
    <TextCon>
    </TextCon>
    <Headcon>
    <HeadText href='#' >Manage</HeadText>
    </Headcon>    
    <TextCon>
        <Text href='#'  onClick={()=>{Setdisplay({dashboard:false,attendance:true,project:false,deductions:false,employee:false})}} >Attendence</Text><br/><br/>
        <Text href='#' onClick={()=>{Setdisplay({dashboard:false,attendance:false,project:true,deductions:false,employee:false})}}>Project</Text><br/><br/>
        
    </TextCon>

    </Sidebar>
 }
    <Main>
         
       
       {display.attendance && 
       <Project admin={true}/>
       }       
       {display.project && 
       <Deductions admin={true}/>
       }
   
         
      
    </Main>
     
    </Page>
    </>
  )
}

export default Home;
