import React from 'react'
import "./HitProduct.css"

type HitProductProps = {
    image: string
    title: string
    vendor: number
    price: number
}

const HitProduct = ({image, title, vendor, price}:HitProductProps) => {
  return (
    <div className='hit-product'>
        <div className="hit-product-head">
            <div className="hit-product-img"><img src= {image} alt="hit-product" /></div>
            <button className='hit-product-details'>Details</button>
            <div className="hit-product-logo"><img src="images/hit-logo.png" alt="hit-logo" /></div>
            <div className="hit-product-like"><img src="images/likes.png" alt="likes" /></div>
        </div>
        
        <div className="hit-product-title">{title}</div>
        <div className="hit-product-vendor">Vendor: {vendor} </div>
        <div className="hit-product-status">Exist / In stock </div>
        <div className="hit-product-price"> {price} $</div>
        <button className="hit-product-add">Add to cart</button>
    </div>
  )
}

export default HitProduct