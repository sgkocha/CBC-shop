import React from 'react'
import "./Category.css"

type CategoryProps = {
    image: string
    title: string;
}

const Category = ({image, title}: CategoryProps) => {
  return (
     <div className="category">
        <div className="category-img"><img src= {image} alt="category" /></div>
        <div className="d-f jc-sb">
            <div className="category-title">{title}</div>
            <div className="category-arrow"><img src="images/arrow1.png" alt="arrow" /></div>
        </div>
        
    </div>
  )
}

export default Category