import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import Carousel from 'react-bootstrap/Carousel'
import '/src/css/productpage.css'
import { motion } from 'framer-motion'


export default function ProductPage() {
  const { productID } = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [review, setReview] = useState('')

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productID}`)
      .then((json) => setProduct(json.data))
  }, [])

  const submitReview = () => {
    console.log(review)
    Swal.fire({
      title: 'Review Submiited!',
      text: 'Thanks for your Review',
      icon: 'success',
      confirmButtonText: 'Continue',
    })
  }

  const addtoCart = () => {
    console.log(review)
    Swal.fire({
      title: 'Item has been added to Cart!',
      text: 'Thankyou for shopping',
      icon: 'danger',
      confirmButtonText: 'Continue',
    })
    const payload = {
      ...product,
      quantity: quantity,
      productTotal: product.price * quantity,
    }

    console.log(payload)
  }
  const giveexperience = () => {
    Swal.fire({
      title: 'How was your experience shopping with us?',
      icon: 'question',
      input: 'range',
      inputLabel: 'Rate Your Experience',
      inputAttributes: {
        min: 8,
        max: 120,
        step: 1,
      },
      inputValue: 25,
    })
  }

  return (
    <>
      <>
        <div className="contain">
          <div className="right">
            {/* <h1><Link to="/products">products/</Link></h1> */}

            <h1 animate={{ x: 100, scale: 1 }} initial={{ scale: 0 }}>
              ProductName: {product.title}
            </h1>
          </div>
          <div className="image">
            <div className="w-100 car">
              <nav aria-label="breadcrumb">
                <Carousel className='caro'>
                  {product?.images?.map((img, key) => (
                    <Carousel.Item key={key}>
                     
                      <img
                        className="element d-block img-fluid"
                        src={img}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>

                <div className="left">
                  <h1 className="mt-5 ">
                    Price:{product.title} - {product.price}$
                  </h1>
                  <h3>
                    Details{' '}
                    <span className=" text-center text-secondary">
                      {product.description}
                    </span>
                  </h3>

                  <div className="d-flex justify-content-center align-items-center">
                    <h3>
                      <span className="ms-3 fw-bold">
                        Rating- {product.rating}
                      </span>
                    </h3>{' '}
                    <ReactStars
                      value={product.rating}
                      edit={false}
                      count={5}
                      size={24}
                      color2={'#ffd700'}
                    />
                  </div>
                </div>
              </nav>
              
            </div>
          </div>
          {/* <div className="left"><h1 className="mt-5 ">
   Price:{product.title} - {product.price}$
        </h1>
        <h3>Details <span className=" text-center text-secondary">
          {product.description}
        </span></h3>
        
        <div className="d-flex justify-content-center align-items-center">
        <h3><span className='ms-3 fw-bold'>Rating- {product.rating}</span></h3> <ReactStars value={product.rating} edit={false}
            count={5}
            size={24}
            color2={'#ffd700'} />  
        </div>
</div>
   */}

   <div className="add">
    <img className='pic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OWBUyXpmVCMEmL5Ax5f7mRg_4CLZzzvhaw&usqp=CAU" alt="" />
    <div className="text-center cart mt-3">
            {quantity > 1 ? (
              <button
                className="btn btn-dark mx-2 "
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
            ) : (
              <button
                disabled
                className="btn btn-info mx-2"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
            )}

            <span className="mx-4">{quantity}</span>
            <button
              className="btn mx-2"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>

            <div className="mt-4">
              <button className="btn mx-5" onClick={addtoCart}>
                Add to Cart
              </button>
            </div>
            {/* <FontAwesomeIcon icon={icon({name: 'coffee', family: 'sharp', style: 'solid'})} /> // Setting both family and style */}
            {/* {
            quantity > 0 ? (
              <>
               
              </>


            ) : (  <button className="btn btn-dark mx-2" onClick={() => setQuantity(quantity + 1)}>Add to Cart</button>)
          } */}

            {/* 
        <div className="py-5">
          <Carousel>
            {
              product?.images?.map((img, key) => <Carousel.Item key={key}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt="First slide"
                />
              </Carousel.Item>)
            }

          </Carousel>
        </div> */}

            <div className="container py-5">
              <h5 className="">Review us:</h5>
              <div className="form-floating mt-3">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                  defaultValue={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>

              <button className="btn mt-2" onClick={submitReview}>
                Submit
              </button>
            </div>
            <button className="btn mt-2" onClick={giveexperience}>
              Experience
            </button>
          </div>
        </div>
        </div>
      </>
    </>
  )
}
