import React from 'react'
import { useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';




export default function CategorySection() {

const [categories, setCategories] = useState([])
useEffect(() => {
axios.get(`https://dummyjson.com/products/categories`)
.then(json => setCategories(json.data))

},[])

  return (
    <>
    <div className="container">
        <div className="my-5 text-center">
            <h1>
                Categories
            </h1>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequuntur deserunt illum aut quaerat sunt sapiente ab ea tenetur magnam laudantium iusto neque beatae qui quae dolorem nam minima esse, atque nihil vel enim omnis deleniti. Saepe veniam vero dolore eaque nam doloribus, quidem possimus a omnis sed nulla consectetur!</p>
        </div>

        <div className="row">
           {

categories.map((val, key) =>

    <div className="col-md-4 my-3" key={key}>
    <Link className='text-decoration-none' to={`/products/category/${val}`} >
    <Card >
{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
<Card.Body>
<Card.Title>{key + 1} - {val.toUpperCase().replace('-', ' ')}</Card.Title>
{/* <Card.Text>
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</Card.Text> */}
{/* <Button variant="primary">Go somewhere</Button> */}
</Card.Body>
</Card>
    </Link>
    </div>

)

     }
        </div>
    </div>
    </>
  )
}
