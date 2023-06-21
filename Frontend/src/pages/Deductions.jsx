import styled from 'styled-components';
import React,{useState,useEffect} from 'react'

import { Button } from '@mui/material'
import axios from 'axios'
import { Modal } from 'react-bootstrap';
import { useAsyncError } from 'react-router';



const Table=styled.table`
 border: 1pt solid black;
 border-collapse: collapse;
 width: 100%;
 margin-bottom: 1rem; 

 tbody {
    & tr:nth-of-type(even) {
      background-color: #f8f9fa;
    }
  }
`
const Thead=styled.thead``
const Tr=styled.tr``
const Th=styled.th`
  background-color: #007bff;
  color: #fff;
  text-align: left;
  padding: 0.75rem;
  border: 1px solid #dee2e6;  
`
const Td=styled.td`
  text-align: left;
  padding: 0.75rem;
  border: 1px solid #dee2e6;
`


const Deductions = ({admin=true,id}) => {

const [data,setData]=useState([])

useEffect(()=>{
 
    
    const getData = async () => {
      const emp=await axios.get("http://localhost:5000/order/find");
      setData(emp.data)  
    }        
      getData();
},[])  
    
    return (
      <Table>
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Product</Th>
          <Th>Address</Th>
          <Th>Amount</Th>
        </Tr>
      </Thead>
      <tbody>
        {data && data.map(item => (
          <Tr key={item._id}>
            <Td>{item.title}</Td>            
            <Td >
              <ul style={{listStyle:"none"}}>
                {item.product.map((val) => (
                  <li style={{backgroundColor:"blue",color:"white",width:"80%"}}  key={val._id}> <span style={{marginLeft:"2rem"}}>ID:{val.productId}</span> <span style={{float:"right",marginRight:"2rem"}}>Quantity:{val.quantity}</span></li>
                ))}
              </ul>
            </Td>            
            <Td>{item.address}</Td>
            <Td>{item.amount}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  
      )
  }
  
  export default Deductions
  