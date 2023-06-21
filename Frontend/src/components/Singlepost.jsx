import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { mobile } from '../pages/Responsive';


const Container= styled.div`
 margin: 50px;
 display: flex;
 ${mobile({marginLeft:"10px",marginRight:"10px"})}

`
const ImgCon=styled.div`
 display: flex;
 width: 50%;
 height: 80vh;
 position: relative;
 z-index: 2;

 ${mobile({width:"100wh"})}

`
const Image= styled.img`
   align-items: flex-start;
   width: 100%;
   height: 80vh;
   position: absolute;
   object-fit: cover;
   object-position: top;
   overflow: hidden;
 

`
const Back= styled.div`
    background-color: #7c777734;
    width: 100%;
    z-index: 2;
    
`
const DesCont=styled.div`
 margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 50%;
  text-align: start;

  overflow: auto;
  ${mobile({marginLeft:"10px"})}

`
const Title=styled.span`
   font-size: 35px;
   font-weight: lighter;
   margin-top: 10px;
`
const Des=styled.p`
   
`
const Price=styled.span`
   font-size: 32px;
   font-weight: lighter; 
`

const Filter= styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  ${mobile({flexDirection:"column"})}

`
const Text= styled.span`
    display: flex;
    align-items: flex-end;
    font-size: 20px;
    font-weight: 200px;
      
`
const Circle=styled.div`
   display: flex;
   border: none;
   height: 25px;
   width: 25px;
   border-radius: 50px;
   background-color: ${props=>props.color};
   margin: 0px 0px 0 5px;
   cursor: pointer;
   
`
const FilterSize= styled.div`
  
`
const FilterSelect= styled.select`
 margin-left: 10px;
 height: 25px;
 text-align: center;
 cursor: pointer;
 margin-right: 10px;
 ${mobile({marginTop:"20px"})}
`
const FilterOption= styled.option`
 `

const Amount= styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  margin-top: 30px;
  ${mobile({flexDirection:"column",marginTop:"50px"})}

`
const QuanCont= styled.div`
display: flex;
font-size: 30px;
align-items: center;

`
const Quantity= styled.div`
   height: 30px;
   width: 30px;
   border-radius: 10px;
   border: 2pt solid tan;
   font-size: 20px;
   text-align: center;
   margin: 0 5px 0 5px;
`
const But =styled.button`
  border: 2pt solid teal;
  height: 50px;
  ${mobile({marginTop:"20px"})}
  cursor: pointer;
  &:hover{
    background-color: #8080807a;
  }


`
const Singlepost = () => {
  return (
    <Container>
        <ImgCon>
      <Image src="https://5.imimg.com/data5/US/LI/MH/SELLER-19199558/mens-regular-fit-trouser-500x500.jpg"/>
      <Back/>
      </ImgCon>
      <DesCont>
        <Title>Slim Fit Pant</Title>
        <Des>Being one of the trusted firms in the industry, we are highly engaged in providing a unique range of Mens Regular Fit Trouser.</Des>
        <Price>$ 20</Price>


      <Filter>
        <Text>Colors:
            <Circle color="blue"/>
            <Circle color="black"/>
            <Circle color="gray"/>
             </Text>
        <Text>Size: 
            <FilterSelect>
                <FilterOption>XL</FilterOption>
                <FilterOption>L</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>S</FilterOption>
            </FilterSelect>
        </Text>
      </Filter>

      <Amount>
       <QuanCont>
        <RemoveIcon style={{"cursor": "pointer"}}/><Quantity>1</Quantity><AddIcon style={{"cursor": "pointer"}}/>
        </QuanCont>
         <But>ADD TO CART</But>
      </Amount>
      </DesCont>

    </Container>
  )
}

export default Singlepost
