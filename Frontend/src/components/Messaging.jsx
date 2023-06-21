import React, { useEffect, useState,useRef} from 'react';
import styled from 'styled-components';

import axios from 'axios';


const ChatbotContainer = styled.div`
  position: fixed;   
  z-index: 3;
  bottom: 5rem;
  right: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 500px;
  background-color: white;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ChatHeader = styled.div`
  background-color: #2196f3;
  color: white;

  z-index: 3;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

const ChatTitle = styled.h3`
  margin: 0;
`;

const ChatCloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ChatBody = styled.div`
  padding: 10px;
  height: 440px;
  overflow-y:scroll;
  /* overflow-y: auto; */
`;

const ChatInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border: 1pt solid black;
  border-radius: 5px;
  
  margin-right: 10px;
`;

const ChatSendButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const ChatToggle = styled.button`
  position: fixed;
  z-index: 3;
  bottom: 20px;
  right: 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
`;

const ChatMessage = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: ${({ isUser }) => (isUser ? 'row-reverse' : 'row')};
`;
const Bullet=styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
`

const steps=[
  {
    id:'0',
    message:"hello",
    trigger:'1'
  }
  ,{
    id:'1',
    message:'Bye',
    end:true
  }
]





const Messaging = () => {
  const messagesEndRef=useRef(null)
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [bot,setBot]=useState('')
  const [isTyping,SetIsTyping]=useState(false)
  console.log(chatHistory)
  useEffect(()=>{
    messagesEndRef.current.scrollIntoView({behavior:'smooth'});
  },[chatHistory])
  const handleChatToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleInputSubmit = (event) => {
  //   event.preventDefault();
  //   if (inputValue.trim() !== '') {
  //     setChatHistory([...chatHistory, { message: inputValue, isUser: true }]);
  //     setInputValue('');
  //     // Send input value to backend for processing and receive response
  //     // Append response to chat history
  //   }
  // };

  const handleInputSubmit = async (event) => {
    event.preventDefault();

    //  setInputValue('');
      // Send input value to backend for processing and receive response
      // Append response to chat history
      const options = {
        inputValue
        };
        const res=await axios.post("http://localhost:5000/Chat/submit",options);
        console.log(res.data)
        setBot(res.data)
        if (inputValue.trim() !== '') {
          setChatHistory([...chatHistory, { message: inputValue, isUser: true }]);
          console.log(chatHistory,"Chat")      
          setInputValue('');   
          SetIsTyping(true)
          setTimeout(() => {
            SetIsTyping(false)
            setChatHistory(prevData => [...prevData,{message:res.data.includes("http") ? <a target="_blank" href={res.data.substring(4)}>{res.data}</a> : res.data,isUser:false}])
            console.log(chatHistory,"Chat");
          }, 2000);   
         
    }
  };  

  return (
    <>
      <ChatbotContainer isOpen={isOpen}>
        <ChatHeader>
          <ChatTitle>Chatbot</ChatTitle>
          <ChatCloseButton onClick={handleChatToggle}>X</ChatCloseButton>
        </ChatHeader>
        <ChatBody>
          <div>
            Key Words:
            
            <ul style={{display:"flex",justifyContent:"space-evenly",maxWidth:"100%",flexWrap:"wrap"}}>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Hello</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Products</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Casual</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Formal</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Accessories</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Shipping</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Delivery</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Payment</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Refund</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Delivery Time</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>Popular Products</li>
              <li style={{marginRight:"1.8rem",textAlign:"center"}}>FAQ</li>
            </ul>
          
          </div>

          {chatHistory.map(({ message, isUser }, index) => (
            <ChatMessage key={index} isUser={isUser}>
              {message}
            </ChatMessage>
          ))}
           {isTyping && (
            <ChatMessage isUser={false}>
              <p>Bot is typing.....</p>
            </ChatMessage>)}
         
        </ChatBody>
        <ChatInputContainer ref={messagesEndRef}>
          <ChatInput
            type="text"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <ChatSendButton onClick={handleInputSubmit}>Send</ChatSendButton>
        </ChatInputContainer>
      </ChatbotContainer>
      {/* <div>
      <ChatBot steps={steps}/>
      </div> */}
      <ChatToggle isOpen={isOpen} onClick={handleChatToggle}>
        Chat with us
      </ChatToggle>
     
    </>
    )
          }

          export default Messaging;