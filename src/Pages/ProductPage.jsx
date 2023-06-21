import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'

export default function ProductPage() {

const {productID} = useParams()

const [product, setProduct] = useState({})


useEffect(() => {
axios.get(`https://dummyjson.com/products/${productID}`)
.then(json => setProduct(json.data))

},[])


  return (
  <div className="container">
    <div className="text-center my-5">
        <h1>{product.title}</h1>
   <p className="text-secondary">{product.description}</p>
<div className='d-flex'> 

<ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} />

</div>

    </div>
  </div>
  )
}
