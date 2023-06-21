import React, { useState, useEffect,useMemo } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {useParams} from 'react-router-dom'





const ProductPage = ({ }) => {
  const {category}=useParams();
  const [products, setProducts] = useState([]);
    console.log(category)
const handleCart = (id,title,price,img,size,color)=>{
  // localStorage.getItem("user")
  
  const Product={
    title:localStorage.getItem("user"),
    product:[{productId:id,quantity:1,producttitle:title,size:size,price:price,img:img,color:color}]
}
console.log("OK")
  axios.post(`http://localhost:5000/cart/post`,Product).then((res)=>{

   // console.log(res)
    window.location.replace("http://localhost:3000/Cart")
}).catch((err)=>{
  console.log(err)
})
}

  useEffect(() => {
    
    // Fetch products from an API endpoint based on the selected category
    axios.get(`http://localhost:5000/product?category=${category}`).then((res)=>{
        setProducts(res.data)
        //console.log(res.data)
    })
  },[category]);

  // const memoizedData = useMemo(() => {
  //   if (!products) {
  //    axios.get(`http://localhost:5000/product?category=${category}`).then((res)=>{
  //       setProducts(res.data)  
  //   }
  // )}
  //   return products;
  // }, [products]);


  // useEffect(()=>{
  //   memoizedData()
  // },[])

  return (
    <Container >
      <ProductGrid>
        {products.map((product) => (
          <Card key={product._id}>
            <CardBody>
              <CardImage src={product.img} ></CardImage>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>"{product.des}"</CardDescription>
              <CardPrice>${product.price}</CardPrice>

             {localStorage.getItem("user") && <Button onClick={()=>{handleCart(product._id,product.title,product.price,product.img,product.size,product.color)}}>Add to cart</Button>}
            </CardBody>
          </Card>
        ))}
      </ProductGrid>
    </Container>
  );
};

// Styled Components
const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 40%;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
`;

const CardDescription = styled.p`
  font-style: italic;
  margin: 0 0 20px;
`;

const CardPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export default ProductPage;