import styled from 'styled-components';
import React,{useState,useEffect} from 'react'
import Table from '../components/Table'
import axios from 'axios';

const Button=styled.button`
   background-color: #3c95c9;
   width: 8%;
   display: flex;
   align-self: flex-start;
   align-items: center;
   border: none;
   color: white;
`
const Attendance = ({admin,id,all}) => {
  const [data,setData]=useState("")
  let response;
  ;
  useEffect(() => {
    const getData = async () => {
      try {



        const result=await response.json();
 
        setData(result);
        
        
        
      } catch (err) {
        //setError(err.message);
       // setData(null);
      } 
    };
    getData();
    
  },[]);



  return (
    <div> 


        
      {data.length>0 && <Table data={data} admin={admin}/>}
     
    </div>
  )
}

export default Attendance
