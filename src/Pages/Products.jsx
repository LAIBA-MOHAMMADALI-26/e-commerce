import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '/src/css/products.css'
export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(json => setProducts(json.data.products))
  }, [])

  return (
    <>

    <div className="container-fluid product">
      <div className="my-5 text-center">
        <h1>PRODUCTS</h1>
        <img src="/src/img1.png" alt="" />
        <p className="text-secondary text-white">The page displaying all products in the e-commerce store, often referred to as the "Product Listing" or "Shop" page, serves as a central hub where customers can browse and explore the range of products available for purchase. </p>
      </div>


      <div className="container">
        <div className="row">

          {
            products.map((product, key) =>
              <div className="col-md-4" key={key}>
                <Link to={`/products/${product.id}`} className='text-decoration-none'>
                  <Card className='car'>
                    <Card.Img variant="top" src={product.thumbnail} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            )
          }

        </div>
      </div>
    </div>
    </>
  )
}
