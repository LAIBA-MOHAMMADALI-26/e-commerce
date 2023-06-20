import '../App.css'
import AppBar from '../Components/AppBar';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import HeaderSection from '../Components/HeaderSection';
import FooterSection from '../Components/FooterSection';
import CategorySection from '../Components/CategorySection';



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