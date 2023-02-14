import React from 'react'
import "./CatalogCaptionItem.css"


type CaptionItemProps = {
    image: string
    title: string
} 

const CatalogCaptionItem = ({image, title}:CaptionItemProps) => {
  return (
    <div className='catalog-caption-item'>
         <div className="caption-item-img"><img src= {image} alt="caption-item-img" /></div>
         <div className="caption-item-title">{title}</div> 
    </div>
  )
}

export default CatalogCaptionItem