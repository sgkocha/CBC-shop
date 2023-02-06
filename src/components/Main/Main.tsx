import React from 'react'
import CatalogLinks from '../CatalogLinks/CatalogLinks'

const Main = () => {
  return (
    <main>
        <div className="shop-about d-f">
            <CatalogLinks/>
            <div className="shop-info">
                <div className="shop-info-caption">
                    <div className="shop-info-title">Computer store <span>CBC in Newark</span> </div>
                    <div className="shop-info-desc">Supply of computer equipment, service center and services for IT integration companies</div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main