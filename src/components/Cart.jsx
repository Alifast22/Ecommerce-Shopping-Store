import React, { useState } from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from "react-router-dom";
import { mobile } from '../pages/Responsive';




const Container = styled.div`
display: flex;
flex-direction: column;
margin: 20px 40px 0 40px;

@media (max-width:600px){
   .icon{
     font-size: 16px;
   }
   margin-right: 20px;
   margin-left: 20px;
};

`
const Title= styled.h1`
    font-weight: 200;
    text-align: center;
`
const ButCont= styled.div`
 display: flex;
 justify-content: space-between;
`
const But= styled.button`
    ${mobile({height:"3.5vh",fontSize:"10px",width:"20vw"})}

 float: ${props=>props.float};
 background-color: ${props=>props.backgroundcolor};
 color: ${props=>props.color};
 cursor: pointer;
 
 &:hover{
    background-color: #a19f9f3a;
    color: black;
  }
`
const Links= styled.span`
 margin: 0 0.625rem 0 0 ;
 text-decoration: underline;
 ${mobile({fontSize:"10px"})}

`
const LinkCont= styled.div`
margin-top: 0.625rem;
${mobile({marginTop:"0px",display:"flex",flexDirection:"column"})}

`
const Product= styled.div`
 display: flex;
 margin-top: 60px;

`
const ProductCont= styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`
const ProductInfo=styled.div`
 flex: 2;
 display: flex;
 border-bottom: 1pt solid tan;
`
const Productdetail= styled.div`
 flex: 2;
 display: flex;
 flex-direction: column;
 align-items: flex-start;

 ${mobile({marginLeft:"10px"})}
`
const ProductImage=styled.img`
flex: 1;
 width: 100%;
 height: 20vh;
 overflow: hidden;
object-fit: cover;
${mobile({height:"15vh",flex:"1.25"})}

`

const ProductdetailData=styled.span`
    font-weight: 300;
    margin-top: 10px;
    ${mobile({fontSize:"12px",marginTop: "5px"})}
    `

const Circle=styled.div`
   display: flex;
   border: none;
   height: 15px;
   width: 15px;
   border-radius: 50px;
   background-color: ${props=>props.color};
   margin-top: 10px;
   cursor: pointer;
   
`
const ProductPricing=styled.div`

flex: 1;
display: flex;
   flex-direction: column;
   align-items: flex-start;

   ${mobile({alignItems: "center"})}
   `
const Amount= styled.span`
    font-size: 28px ;
    ${mobile({fontSize:"18.6px"})}
    font-weight: 200;
    `
const Quantity= styled.span`
    margin: 20px 0 10px 0;
    font-size: 24px;
    ${mobile({fontSize:"20px"})}
    `
const Summary= styled.div`
    flex: 1;
    border: 1pt solid tan;
    border-radius: 20px;
    width: 20px;
    height: 50vh;
    padding:10px;
    ${mobile({height:"auto"})}

    `
const SummaryHeading=styled.span`
   font-size: 30px;
   font-weight: 200;
   margin: 30px 10px 10px 10px;

   ${mobile({fontSize:"20px"})}
`
const Dataspace = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.fontWeight};    
    margin: 30px 10px 10px 10px;
    `
const SummaryData= styled.span`
   font-size: 16px;
   font-size: ${props=>props.fontSize};
   ${mobile({fontSize:"10.6px"})}
`

const SummaryBut= styled.button`
    margin-top: 30;
`


const Cart = () => {

   const [count,setCount] = useState(0);


  return (
    <Container>
     <Title>YOUR BAG</Title>
     <ButCont >
     <Link to={"/"} style={{style:"none"}}><But float="left" backgroundcolor='white'>CONTINUE SHOPPING</But></Link>
     <LinkCont>
     <Links>Shopping Bag(2)</Links>
     <Links>Your Wishlist(0)</Links>
     </LinkCont>
     <But float="right" backgroundcolor='black' color='white'>CHECKOUT NOW</But> 
     </ButCont>
     <Product>
     <ProductCont>
     <ProductInfo>
        <ProductImage src='https://5.imimg.com/data5/US/LI/MH/SELLER-19199558/mens-regular-fit-trouser-500x500.jpg'/>
        <Productdetail>
        <ProductdetailData><b>Product</b>: Slim Fit Pants</ProductdetailData>
        <ProductdetailData><b>ID</b>: 192389</ProductdetailData>
        <Circle color='gray'/>
        <ProductdetailData><b>Size</b>: M</ProductdetailData>
        </Productdetail>
        <ProductPricing>
           <Quantity><AddIcon onClick={()=>{setCount(count+1)}} fontSize='small' className='icon' style={{"cursor": "pointer"}}/>{count}<RemoveIcon onClick={()=>{if(count!=0){setCount(count-1)}}} className='icon' fontSize='small' style={{"cursor": "pointer"}}/></Quantity>
           <Amount>$30</Amount>
        </ProductPricing>
     </ProductInfo>
    <hr/>
     <ProductInfo>
        <ProductImage src='data:image/jpeg;base64,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'/>
        <Productdetail>
        <ProductdetailData><b>Product</b>: Formal Shoes</ProductdetailData>
        <ProductdetailData><b>ID</b>: 193369</ProductdetailData>
        <Circle color='black'/>
        <ProductdetailData><b>Size</b>: 37</ProductdetailData>
        </Productdetail>
        <ProductPricing>
           <Quantity><AddIcon fontSize='small' className='icon' style={{"cursor": "pointer"}} />{count}<RemoveIcon className='icon' fontSize='small' style={{"cursor": "pointer"}}/></Quantity>
           <Amount>$30</Amount>
        </ProductPricing>
     </ProductInfo>          
     </ProductCont>
     <Summary>
       <SummaryHeading>ORDER SUMMARY</SummaryHeading>
       <Dataspace>
        <SummaryData>Subtotal</SummaryData>
        <SummaryData>$60</SummaryData>
       </Dataspace>       
       <Dataspace>
        <SummaryData>Estimated Shipping</SummaryData>
        <SummaryData>$5.90</SummaryData>
       </Dataspace>       
       <Dataspace>
        <SummaryData>Shipping Discount</SummaryData>
        <SummaryData>$1.00</SummaryData>
       </Dataspace>       
       <Dataspace fontWeight="bold" >
        <SummaryData fontSize="22px" >Total</SummaryData>
        <SummaryData fontSize="22px">$65.90</SummaryData>
       </Dataspace>
       <But backgroundcolor="black" color='white'>CHECKOUT</But>
     </Summary>
     </Product>
    </Container>
  )
}

export default Cart
