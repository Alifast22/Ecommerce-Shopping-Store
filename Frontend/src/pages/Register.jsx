import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './Register.css'
import axios from 'axios'

const Form = () => {

const [userData,setuserData]=useState({username:"", email:"", password:""});
const [error,seterror]=useState(false);
const [success,setSuccess]=useState(false);
const [profilepic,setProfilepic] =useState("")

const handleInput = (e) => {
  const name=e.target.name;
  const value=e.target.value;
  setuserData({...userData, [name]:value});
}
const formreturn = async (e) => {

  e.preventDefault();

  seterror(false)
  const {username,email,password} = userData;
 
   if(username && email && password)
   { 
    try {
         
      //   console.log("ok");
      //  const res= await axios.post("http://localhost:3001/auth/register",{
      //   username,
      //   email,
      //   password,
      //   phone
      //  }).then(res=>console.log(res)).catch(err=>console.log(err))
      //  console.log(res)
      //  res.data && window.location.replace("/Login")

      const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        };
        fetch('http://localhost:5000/Auth/Register', options)
        .then(data => {
            if (!data.ok) {
              throw Error(data.status);
             }
             return data.json();
            }).then(update => {
            console.log(update);
            if (update.code) seterror(true)
            else{
                 setSuccess(true);
            setTimeout(() => {
                
                window.location.replace("/Login")
            }, 2000);   
            }
            
            }).catch(e => {
            console.log(e);
            seterror(true)
            });              
   }
    catch (err) {
        seterror(true)
      console.log(err)
    }    
   }
   else{
    alert("Invalid input");
   }
   
}

  return (
    <>
      
      <div className='formpage'>
      <div className='form'>
      <form action=""  >
        
        <div className='formcover'>
        <br/>    
        <h1 className='h1'>Register</h1>
        <br/>              
        <label className='label' htmlFor='username'>Fullname</label>
        <input className='input' type='text' name="username" value={userData.username} onChange={handleInput} id="username"/>        
        <label className='label' htmlFor='email'>email</label>
        <input className='input' type='text' name="email" value={userData.email} onChange={handleInput} id="email"/>        
        <label className='label' htmlFor='password'>password</label>
        <input className='input' type='password' name="password" value={userData.password} onChange={handleInput} id="password"/>        
        {/* <label htmlFor='phone'>phone</label>
        <input type='text' name="phone" value={userData.phone} onChange={handleInput} id="phone"/> */}
        <button className='buttonsubmit' type='submit' onClick={formreturn} name='submit'>SUBMIT</button>
        {success && <span className='error'>Successfully Registered! {'\n'} Redirecting to Login Page....</span> }
        {/* <button type='button' className='loginbtn'><Link to={"/Login"} className='link'>LOGIN </Link></button> */}
        {error && <span className='error'>username or email already in use</span> }
        </div> 
              
      </form>
      </div>
      </div>
    </>
  )
}

export default Form;
