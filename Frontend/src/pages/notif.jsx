import React, { useState,useEffect } from "react";
import axios from 'axios';
import styled, { keyframes } from "styled-components";

const NotificationIcon = styled.div`
position: relative;
width: 24px;
height: 24px;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid white;
border-radius: 4px;
background-color: transparent;
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: #ff4136;
  color:white;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 50%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
`;

const NotificationDropdown = styled.div`
  position: absolute;
  top: 3rem;
  right: 2;
  background-color: white;
  color: black;
  padding: 1rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const NotificationTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const NotificationMessage = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const NotificationTime = styled.span`
  font-size: 0.8rem;
  color: #aaa;
`;

const Notification = ({ title, message, time }) => {
  return (
    <div>
      <NotificationTitle>{title}</NotificationTitle>
      <NotificationMessage>{message}</NotificationMessage>
      <NotificationTime>{time}</NotificationTime>
    </div>
  );
};

const NotificationList = styled.div`
  max-height: 20rem;
  overflow-y: auto;
  margin-top: 1rem;
`;

const NoNotifications = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const NotificationCenter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const getNotifications = async () => {
      const createdAt=localStorage.getItem("created")
      
      const response = await axios.get(`http://localhost:5000/Push/api/notifications/${createdAt}`);
     // console.log(response.data)
      setNotifications(response.data);
    };

    getNotifications();
  }, [notifications]);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <NotificationIcon onClick={toggleDropdown}>
      <i className="fas fa-envelope"></i>
      <NotificationBadge>{notifications.length}</NotificationBadge>
      {showDropdown && (
        <NotificationDropdown>
          <h2>Notifications</h2>
          {notifications.length > 0 ? (
            <NotificationList>
              {notifications.map((notification) => (
                <Notification
                  key={notification.id}
                  title={notification.title}
                  message={notification.message}
                  time={new Date(Date.parse(notification.createdAt)).toDateString()}
                />
              ))}
            </NotificationList>
          ) : (
            <NoNotifications>No notifications to show</NoNotifications>
          )}
        </NotificationDropdown>
      )}
    </NotificationIcon>
  );
};
export default NotificationCenter