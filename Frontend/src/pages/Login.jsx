
import React from 'react'
import {useState} from 'react'
import styled from 'styled-components';

const Cont=styled.div`
    display:flex ;
`
const ImgCont=styled.div`
    border: 1pt solid;
    flex: 2;
    height: 100vh;
    
`
const Image=styled.img`
  width: 100%;
  height: 100vh;
  object-fit: fill;
`
const TextCon=styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    
`
const Curve=styled.div`
    display: flex;
    flex-direction: column;
    border: 1pt solid;
    height: 100vh;
   margin-top: 40px;
   margin-bottom: 30px;
   width: 80%;
   height: 80vh;
   border-radius: 20px;
   background-color: #eed3a073;
   padding: 1rem;
`
const FormText=styled.div`
   display: flex;
   flex-direction: column;
 
`
const FormIn=styled.input`
    
    border: 1pt solid teal;
     background-color: white;
     height: 5vh;
`
const FormLab=styled.label`
    color: black;
`

const Button = styled.button`
  background-color: #4CAF50;
  align-self: center;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
 
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;
const Login = () => {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [err,setErr]=useState(false);

    const handleInput =async (e) => {

        e.preventDefault();
  
  
  
        try {
  
          // console.log('OK');
          // const res=await axios.post("http://localhost:3001/auth/login",{         
          //   username: username,
          //   password: password
          // });
          const options = {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({username,password}),
              };
              fetch('http://localhost:5000/Auth/Login', options)
              .then(data => {
                  if (!data.ok) {
                    throw Error(data.status);
                   }
                   console.log("received data")
                   return data.json();
                  }).then(update => {
                    if(update.err===null)
                    {
                        setErr(true);
                        throw Error(update.err);
                    }
                    else{
                        setErr(false)
                        console.log(update)
                        localStorage.setItem("user",username)
                        localStorage.setItem("id",update._id)
                        localStorage.setItem("created",update.createdAt)
                        window.location.replace("/Home")
                        localStorage.setItem("user",username)
                    }                   
                  }).catch(e => {
                  console.log(e);
                  setErr(true);
                  });         


      //
           
  
        } catch (err) {
  
          alert("Invalid credentials")
        }
        
      }
  

  return (
    <Cont>
     <ImgCont>
     <Image src='https://media.istockphoto.com/id/513954989/photo/the-same-repeated-every-day-on-the-desk.jpg?s=612x612&w=0&k=20&c=arYAclJ7jZXs9uNVAZn4otYxwuB_vzGwHhBi52Odnnk='/>
     </ImgCont>
     <TextCon >
        <Curve>
      <form action=""  onSubmit={handleInput} >
        
        
           <br/>    
        <h1 style={{color:'black'}}>Login</h1>
        <div>
        <FormText>
        <FormLab htmlFor='username'>username</FormLab>
        <FormIn type='text' name="username"  id="username" onChange={(e)=>{setUsername(e.target.value)}}/>        
        <FormLab  htmlFor='password'>password</FormLab>
        <FormIn type='password' name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>        
        {err && <span style={{alignSelf:"center",color:'red',fadeout:1000}}>Wrong Credentials</span>}
        <Button variant='outlined' type='submit' name='submit' style={{marginTop:'40px',color:'white',border :'1pt solid teal'}}>SUBMIT</Button>
        </FormText>
        </div>     
      </form> 
      </Curve> 
      </TextCon>    
    </Cont>
  )
}

export default Login
