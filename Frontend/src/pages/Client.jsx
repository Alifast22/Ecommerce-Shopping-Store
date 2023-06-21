import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Client = () => {
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    const getNotifications = async () => {
      const createdAt=localStorage.getItem("created")
      
      const response = await axios.get(`http://localhost:5000/Push/api/notifications/${createdAt}`);
      console.log(response.data)
      setNotifications(response.data);
    };

    getNotifications();
  }, [notifications]);

  return (
    <div>
      <h1>Client Home Page</h1>
      <p>Get notified of our latest deals!</p>
      {notifications.map((notification) => (
        <div key={notification.id}>
          <h2>{notification.title}</h2>
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Client;
