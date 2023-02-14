import React from 'react'
import "./ProductListItem.css"

type ProductListItemProps = {
    image: string
    title: string
    vendor: number
    price: number
}

const ProductListItem = ({image, title, vendor, price}:ProductListItemProps) => {
  return (
    <div className='product-list-item'>
        <div className="product-img"><img src={image} alt="product-img" /></div>
        <div className="product-title">{title}</div>
        <div className="product-vendor"> Vendor: {vendor}</div>
        <div className="product-status">Exist / In stock</div> 
        <div className="product-price">{price} $ </div>
        <button className='product-btn'>Add to cart</button>
    </div>
  )
}

export default ProductListItem