import React from 'react'
import "./PriceCategory.css"

type PriceCategoryProps = {
    image: string
    title: string
    price: number

}

const PriceCategory = ({image, title, price}: PriceCategoryProps) => {
  return (
    <div className='service-prices-item'>
       <div className="prices-item-caption d-f">
          <div className="prices-item-img"><img src= {image} alt="price-category" /></div>
          <div>
              <div className="prices-item-title">{title}</div>
              <div className="prices-item-price"> From {price} $</div>
          </div>
       </div>
       <div className="prices-item-action d-f">
            <div>View price list</div>
            <div><a href="#"><img src="images/arrow1.png" alt="arrow" /></a></div>
       </div>
    </div>
  )
}

export default PriceCategory