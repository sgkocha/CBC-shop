import React from 'react'
import Category from '../Category/Category'

const TopCategories = () => {
  return (
    <div className="cbc-top">
    <div className="container d-f">
      <div className="cbc-advantages-title">Top CBC categories</div>
      <Category 
        image='images/category1.png'
        title='Processors'
      />
      <Category 
        image='images/category2.png'
        title='Laptops'
      />
      <Category 
        image='images/category3.png'
        title='System blocks'
      />
      <Category 
        image='images/category4.png'
        title='Monitors'
      />
      <Category 
        image='images/category5.png'
        title='Printers'
      />
      <Category 
        image='images/category6.png'
        title='Multifunction devices'
      />
      <Category 
        image='images/category7.png'
        title='Video cards'
      />
      <Category 
        image='images/category8.png'
        title='Cartridges'
      />
      <Category 
        image='images/category9.png'
        title='Microphones'
      />
      <Category 
        image='images/category10.png'
        title='Computer technology'
      />
      <div className="all-categories">
        <a href="#">VIEW ALL CATEGORIES</a>
        <img src="images/arrow1.png" alt="arrow" />
      </div>
    </div>

  </div>
  )
}

export default TopCategories