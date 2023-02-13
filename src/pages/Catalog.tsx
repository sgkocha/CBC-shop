import React from 'react'
import CatalogLinks from '../components/CatalogLinks/CatalogLinks'
import ProductFilter from '../components/ProductFilter/ProductFilter'

const Catalog = () => {
  return (
    <main>
      <div className="catalog-wrap">
        <div>
          <CatalogLinks />
          <ProductFilter />
        </div>

      </div>
    </main>
  )
}

export default Catalog