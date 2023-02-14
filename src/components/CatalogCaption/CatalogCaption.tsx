import React from 'react'
import CatalogCaptionItem from '../CatalogCaptionItem/CatalogCaptionItem'

const CatalogCaption = () => {
  return (
    <div className='catalog-caption d-f'>
        <CatalogCaptionItem 
            image='images/catalogCaption1.png'
            title='Cell Phones'
        />
        <CatalogCaptionItem 
            image='images/catalogCaption2.png'
            title='Tablets'
        />
        <CatalogCaptionItem 
            image='images/catalogCaption3.png'
            title='Mobile accessories'
        />
        <CatalogCaptionItem 
            image='images/catalogCaption4.png'
            title='Accessories for tablet devices'
        />
    </div>
  )
}

export default CatalogCaption