import logo from './logo.svg';
import './App.css';

import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CategoriesPage } from './pages/CategoriesPage';
import PostPage from './pages/PostPage';
import NewsletterPage from './pages/NewsletterPage';
import { SinglepostPage } from './pages/SinglepostPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Categories' element={<CategoriesPage/>}/>
    <Route path='/Post' element={<PostPage/>}/>
    <Route path='/Newsletter' element={<NewsletterPage/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Singlepost' element={<SinglepostPage/>}/>


    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
