import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInput = styled.input`
  border: none;
  border-bottom: 2px solid #aaa;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  max-width: 400px;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 2px solid #3f51b5;
  }
`;

const MessageInput = styled.textarea`
  border: none;
  border-bottom: 2px solid #aaa;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  max-width: 400px;
  width: 100%;
  resize: vertical;
  &:focus {
    outline: none;
    border-bottom: 2px solid #3f51b5;
  }
`;
const Notification = styled.div`
  background-color: #3f51b5;
  color: white;
  font-size: 1.2rem;
  max-width: 800px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`;


const SubmitButton = styled.button`
  background-color: #3f51b5;
  color: white;
  font-size: 1.2rem;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #2c3e50;
  }
`;

const SuccessMessage = styled.div`
  background-color: #2ecc71;
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.7s ease-out;
`;
const Admin = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

 

  const handlePush = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:5000/Push/api/push', {
      title,
      message,
    });
    console.log(response.data);
    setTitle("");
    setMessage("");
    setSuccess(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [success]);
  return (
    <div>
    <FormContainer>
    <Notification>Welcome to the notification page!</Notification>
    <TitleInput
      type="text"
      placeholder="Deal name"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />
    <MessageInput
      placeholder="Description of the deal"
      value={message}
      onChange={(event) => setMessage(event.target.value)}
    />
    <SubmitButton onClick={handlePush}>Push</SubmitButton>
    <SuccessMessage show={success}>Push notification sent!</SuccessMessage>
  </FormContainer>
  </div>
  )
};

export default Admin;