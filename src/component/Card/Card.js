import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
function Card({brand,description,images,price,thumbnail,title,category,discountPercentage,id}) {
  return (
    <>
      <div className="product-card spacing">
            <div className="badge"> {brand} </div>
            <div className="product-thumb">
                <img src={thumbnail} alt='product-img'/>
            </div>
            <div className="product-details">
                <span className="product-category">{category}</span>
                <h4>{title}</h4>
                <p> {description} </p>
                <div className="product-bottom-details">
                    <div className="product-price"><small>{discountPercentage}% ⬇</small>${price}</div>
                    <div className="product-links">
                      <Link to={`/details/${id}`}> <button>Buy Now</button> </Link>
                    </div>
                </div>
            </div>
        </div>
     

    
    </>
  )
}

export default Card
