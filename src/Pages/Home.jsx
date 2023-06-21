import '../App.css'
import AppBar from '../Components/AppBar';
// import ItemCard from '../Components/ItemCard';

import axios from 'axios';

import React from 'react';

import { useEffect } from 'react';
// import Loader from './Components/Loader';

function Home() {

 useEffect (() => {

axios.get('https://jsonplaceholder.typicode.com/posts')
// .then((data)  => setTimeout(() => setUsers(data.data), 2000))
.then((data) => console.log(data))
.catch((err) => console.log(err))
 }, [])


  return (

   <>

{/* { user.lenght >0 ? ("hello") : ("hi") } */}

  <AppBar/>
  {/* <div className="container">
    <div className="row gap-5 mt-5">
    <ItemCard  username="Atiqa" fathername="Pasha" />
    <ItemCard username="Atiqa" fathername="Pasha"/>
    <ItemCard username="Atiqa" fathername="Pasha"/>
    <ItemCard username="Atiqa" fathername="Pasha"/>
    </div>
  </div> */}

{/* <MyComponents/> */}



   </>
  )


  // for loader
// :
//   (
// <div className="d-flex">
//   <Loader/>
// </div>
//   )
}

export default Home