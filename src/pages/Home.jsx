import React from 'react'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Post from '../components/Post'
import { Sidebar } from '../components/Sidebar'
import Messaging from '../components/Messaging'



export const Home = () => {
  return (
    <>
     <Navbar/>
    <Carousel/>
     <Messaging/>
    <Categories/>
    <Post/>
    <Newsletter/>
    </>
  )
}
