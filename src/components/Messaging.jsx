import React, { useState } from 'react';
import styled from 'styled-components';
import ChatBot from "react-simple-chatbot"

const ChatbotContainer = styled.div`
  position: fixed;   
  z-index: 3;
  bottom: 50px;
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
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChatToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setChatHistory([...chatHistory, { message: inputValue, isUser: true }]);
      setInputValue('');
      // Send input value to backend for processing and receive response
      // Append response to chat history
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
          {chatHistory.map(({ message, isUser }, index) => (
            <ChatMessage key={index} isUser={isUser}>
              {message}
            </ChatMessage>
          ))}
        </ChatBody>
        <ChatInputContainer>
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