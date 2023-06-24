import React from 'react'
import  { Route, Routes, Navigate} from "react-router-dom";
import Home from './Pages/Home';
import Page404 from './Pages/Page404';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import CategoryPage from './Pages/CategoryPage';

import { useState } from 'react';
import ProductPage from './Pages/ProductPage';
import Products from './Pages/Products';
import AppBar from './components/AppBar';
// import HeaderSection from './Components/HeaderSection';
// import FooterSection from './Components/FooterSection';




export default function App() {

const [user, setUser] = useState(true)

  return (
<>
<AppBar/>

{
  user ? (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:productID" element={<ProductPage />} />
    <Route path="/products/category/:categoryName" element={<CategoryPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="*" element={<Page404 />} />
   
  </Routes>)
  
  : (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signUp" element={<SignUp />} />
    
    <Route path="*" element={<Navigate to="/login" replace={true} /> } />
  </Routes>)
}


{/* <FooterSection/> */}

</>

    
  )
}







