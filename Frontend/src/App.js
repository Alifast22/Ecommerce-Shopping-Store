import logo from './logo.svg';
import './App.css';

import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CategoriesPage } from './pages/CategoriesPage';
import Admin from './pages/Admin'
import PostPage from './pages/PostPage';
import ProductPage from './pages/Products';
import NewsletterPage from './pages/NewsletterPage';
import Register from './pages/Register'
import Login from './pages/Login';

import { SinglepostPage } from './pages/SinglepostPage';
import Project from './pages/Project';
import FaqSection from './pages/Faq';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route path='/' element={<Home/>}/> */}

    <Route path='/Admin' element={<Admin/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/Products/:category' element={<ProductPage/>}/>
    <Route path='/Categories' element={<CategoriesPage/>}/>
    <Route path='/Post' element={<PostPage/>}/>
    <Route path='/Newsletter' element={<NewsletterPage/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Singlepost' element={<SinglepostPage/>}/>
    <Route path='/faq' element={<FaqSection/>}/>


    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
