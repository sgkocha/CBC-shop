import React from 'react'
import CatalogCaption from '../components/CatalogCaption/CatalogCaption'
import CatalogLinks from '../components/CatalogLinks/CatalogLinks'
import ProductFilter from '../components/ProductFilter/ProductFilter'
import ProductList from '../components/ProductList/ProductList'

const Catalog = () => {
  return (
    <main>
      <div className="catalog-wrap ">
        <div className="container d-f">
          <div>
            <CatalogLinks />
            <ProductFilter />
          </div>
          <div>
            <CatalogCaption />
            <ProductList/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Catalog