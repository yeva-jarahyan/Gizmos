import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Home from './pages/home/home';
import Product_Detal from './productDetail';
import About from './pages/About/about';
import Cart from './pages/cart/cart';
import Contact from './pages/contact/contact';
function App() {
    return (
        <BrowserRouter basename = "/">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='productDetail' element={<Product_Detal/>}></Route>
                    {/* <Route index element={<About/>}></Route> */}
                    <Route path="about" element={<About/>} />
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='contact' element={<Contact/>}></Route>

                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App;
