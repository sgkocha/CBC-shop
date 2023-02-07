import React from 'react'
import Advantage from '../Advantage/Advantage'
import CatalogLinks from '../CatalogLinks/CatalogLinks'

const Main = () => {
  return (
    <main>
      <div className="shop-about d-f align-center">
        <CatalogLinks />
        <div className="shop-info">
          <div className="shop-info-caption">
            <div className="shop-info-title">Computer store <span>CBC in Newark</span> </div>
            <div className="shop-info-desc">Supply of computer equipment, service center and services for IT integration companies</div>
          </div>
          <div className="shop-info-about">
            <div className="info-about-desc">Supplies of computer equipment for offices full construction</div>
            <a href="#" className="info-about-link">VIEW OFFER</a>
          </div>

        </div>
        <div className="shop-info-stat">
          <div className="info-stat-item">
            <div className="stat-item-num">0</div>
            <img src="images/cart.svg" alt="cart" />
          </div>
          <div className="info-stat-item">
            <div className="stat-item-num">0</div>
            <img src="images/likes.svg" alt="likes" />
          </div>
        </div>
      </div>
      <div className="cbc-advantages">
        <div className="container d-f">
          <div className="cbc-advantages-title">It is profitable to work with CBC and reliably</div>
          <Advantage image="images/advantage1.png" title='Reliable supplier' subtitle='Since 1993 on the Newark market. 28 years
            close to you.'/>
          <Advantage image="images/advantage2.png" title='Full complex' subtitle='Deliveries, repairs and service in the service
            CBC center - all in one place'/>
          <Advantage image="images/advantage3.png" title='Turnkey order' subtitle='We will select turnkey equipment according to your needs
            and budget.'/>
          <Advantage image="images/advantage5.png" title='Quality service' subtitle='High-end technical experts who do not stand above the soul, but will advise what necessary.' />
          <Advantage image="images/advantage6.png" title='Cooperation' subtitle='We work with physical and legal persons including with the state customers' />
        </div>

      </div>
    </main>
  )
}

export default Main