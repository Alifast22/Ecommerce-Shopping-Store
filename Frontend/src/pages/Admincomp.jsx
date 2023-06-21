import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

 

  const handlePush = async () => {
    const response = await axios.post('http://localhost:5000/Push/api/push', {
      title,
      message,
    });
    console.log(response.data);
  };

  return (
    <div>
      <h1>Admin Deals Page</h1>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Message:
        <input type="text" value={message} onChange={handleMessageChange} />
      </label>
      <br />
      <button onClick={handlePush}>Push</button>
    </div>
  );
};

export default Admin;