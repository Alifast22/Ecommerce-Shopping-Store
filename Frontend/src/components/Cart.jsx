import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from "react-router-dom";
import { mobile } from '../pages/Responsive';
import axios from 'axios';
import { ImCross } from 'react-icons/im';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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
   const [products,setProducts]=useState([])
 //  const [totalprice,setTotalprice]=useState(0)   
   let totalprice=0
   let totalproducts=[]

   
   const deleteCart = (id)=>{
    window.location.reload(false)
    axios.delete(`http://localhost:5000/cart/${id}`).then((res)=>{
  
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })

   }
   const decrease = (id)=>{
    for(let i=0;i<products.length;i++)
    {
      if(id===products[i]._id)
      {
        
      }
    }
    let temp=[]
    products.map((val)=>{
      id===val._id && val.product[0].quantity>1 ?
      temp.push({_id:val._id ,title:val.title,product:[
        {productId:
        val.product[0].productId,
        quantity:
        val.product[0].quantity-1,
        size:
        val.product[0].size,
        producttitle:val.product[0].producttitle,
        img:val.product[0].img,
        color:val.product[0].color,        
        price:val.product[0].price}]})
        :
        temp.push({_id:val._id,title:val.title,product:val.product})
            
    }) 
    setProducts(temp)    
    // );
   }

   const increase = (id)=>{
     
    let temp=[]
    products.map((val)=>{
      id===val._id ?
      temp.push({_id:val._id ,title:val.title,product:[
        {productId:
        val.product[0].productId,
        quantity:
        val.product[0].quantity+1,
        size:
        val.product[0].size,
        producttitle:val.product[0].producttitle,
        img:val.product[0].img,
        color:val.product[0].color,
        price:val.product[0].price}]})
        :
        temp.push({_id:val._id,title:val.title,product:val.product})
            
    }) 
    setProducts(temp) 
   // totalprice=products.product[0].price * products.product[0].quantity  
    // );
   }
   const handleCheckout = ()=>{
    
    console.log(totalproducts)
    console.log(totalprice)
     
    if (products.length===0)
    {
      alert("Enter Some Producs First")
      return
    }
    
    const addr=prompt("Please Enter your address below")
    const Order={
      title:localStorage.getItem("user"),
      product:totalproducts,
      amount:totalprice,
      address:addr,
      status:"pending"
    }
    axios.post(`http://localhost:5000/order/post`,Order).then((res)=>{
  
      console.log(res)

      axios.get(`http://localhost:5000/cart/delete/${localStorage.getItem("user")}`).then((val)=>{

        console.log(val)
        window.location.replace("http://localhost:3000/Home");
      })

      
  }).catch((err)=>{
    console.log(err)
  })
   }
   useEffect(() => {
    
      // Fetch products from an API endpoint based on the selected category
      axios.get(`http://localhost:5000/cart/find/${localStorage.getItem("user")}`).then((res)=>{
          setProducts(res.data)
          console.log(res.data)
      })
    },[]);
     
   // useEffect(() => {
      
      if (products.length!==0){
        for (let i = 0; i < products.length; i++) {
          totalprice=totalprice+products[i].product[0].price*products[i].product[0].quantity
          totalproducts.push(products[i].product[0])
       
      }}
 //   },[products]);   
   
  return (
    <Container>


     <Title>YOUR BAG</Title>
     <ButCont >
     <Link to={"/Home"} style={{style:"none"}}><But float="left" backgroundcolor='white'>CONTINUE SHOPPING</But></Link>
     <LinkCont>
     <Links>Shopping Bag({products.length})</Links>
     <Links>Your Wishlist(0)</Links>
     </LinkCont>
     <But float="right" backgroundcolor='black' color='white'><Link style={{color:"white",textDecoration:"none"}} to={"/Categories"}>Explore Categories</Link></But> 
     </ButCont>
     <Product>
     <ProductCont>
      {
        products.map((product) => (
         product.product.map((val)=> (

      <ProductInfo key={product._id}>  
        <ImCross onClick={()=>{deleteCart(product._id)}} style={{position:"absolute",right:"500"}}/>   
        <ProductImage src={val.img}/>
        <Productdetail>
        {/* <div>{val.img}</div> */}
        <ProductdetailData><b>Product</b>:{val.producttitle}</ProductdetailData>
        <ProductdetailData><b>ID</b>: {val.productId}</ProductdetailData>
        <Circle color={val.color}/>
        <ProductdetailData><b>Size</b>: {val.size}</ProductdetailData>
        </Productdetail>
        <ProductPricing>
           <Quantity><AddIcon onClick={()=>{increase(product._id)}} fontSize='small' className='icon' style={{"cursor": "pointer"}}/>{val.quantity}<RemoveIcon onClick={()=>{decrease(product._id)}} className='icon' fontSize='small' style={{"cursor": "pointer"}}/></Quantity>
           <Amount>${val.price}</Amount>
        </ProductPricing>
       <hr/>
     </ProductInfo>

         ))
         )
         )         
      }         
     </ProductCont>
     <Summary>
       <SummaryHeading>ORDER SUMMARY</SummaryHeading>
       <Dataspace>
        <SummaryData>Subtotal</SummaryData>
        <SummaryData>{totalprice}</SummaryData>
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
        <SummaryData fontSize="22px">${totalprice+5.90+1.00}</SummaryData>
       </Dataspace>
       <But onClick={()=>{handleCheckout()}} backgroundcolor="black" color='white'>CHECKOUT</But>
     </Summary>
     </Product>
    </Container>
  )
}

export default Cart
