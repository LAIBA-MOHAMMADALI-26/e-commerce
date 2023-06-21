import '../App.css'
import AppBar from '../components/AppBar';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';
import CategorySection from '../components/CategorySection';

// import AppBar from '../components/AppBar'



function Home() {

 


  return (

   <>

  <AppBar/>

<HeaderSection/>


<CategorySection/>

<FooterSection/>
   </>
  )

}

export default Home