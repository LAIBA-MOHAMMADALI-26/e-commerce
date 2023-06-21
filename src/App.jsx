<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======
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
// import HeaderSection from './Components/HeaderSection';
// import FooterSection from './Components/FooterSection';




export default function App() {

const [user, setUser] = useState(true)

  return (
<>


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

    
>>>>>>> 02418c46e1c8bad82b1bc8fa67ab66d8c3dd41b5
  )
}







