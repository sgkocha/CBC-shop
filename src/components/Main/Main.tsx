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
          <Advantage
            width="323px"
            image="images/advantage1.png"
            title='Reliable supplier'
            subtitle='Since 1993 on the Newark market. 28 years close to you.' />
          <Advantage
            image="images/advantage2.png"
            title='Full complex'
            subtitle='Deliveries, repairs and service in the service CBC center - all in one place' />
          <Advantage
            image="images/advantage3.png"
            title='Turnkey order'
            subtitle='We will select turnkey equipment according to your needs and budget.' />
          <div className="direct-deliveries">
            <div className="direct-deliveries-img"><img src="images/advantage4.png" alt="advantage" /></div>
            <div className="direct-deliveries-title">Direct deliveries</div>
            <ul className="direct-deliveries-logos d-f jc-sb align-center">
              <li className="deliveries-logos-item"><img src="images/deliveries1.png" alt="deliveries1" /></li>
              <li className="deliveries-logos-item"><img src="images/deliveries2.png" alt="deliveries2" /></li>
              <li className="deliveries-logos-item"><img src="images/deliveries3.png" alt="deliveries3" /></li>
              <li className="deliveries-logos-item"><img src="images/deliveries4.png" alt="deliveries4" /></li>
              <li className="deliveries-logos-item"><img src="images/deliveries5.png" alt="deliveries5" /></li>
              <li className="deliveries-logos-item"><img src="images/deliveries6.png" alt="deliveries6" /></li>
              <li className="deliveries-logos-item"><img src="images/deliveries7.png" alt="deliveries7" /></li>
            </ul>
          </div>
          <Advantage
            image="images/advantage5.png"
            title='Quality service'
            subtitle='High-end technical experts who do not stand above the soul, but will advise what necessary.' />
          <Advantage
            image="images/advantage6.png"
            title='Cooperation'
            subtitle='We work with physical and legal persons including with the state customers' />
        </div>

      </div>
      <div className="cbc-full">
        <div className="container d-f">
          <div className="cbc-full-item">
            <div className="full-item-icon"><img src="images/advantage7.png" alt="advantage7" /></div>
            <div className="full-item-title">Complex supplies computer equipment for your office in Newark</div>
            <div className="full-item-box d-f">
              <div className="full-item-img"><img src="images/monitor1.png" alt="monitor" /></div>
              <div className="full-item-info">
                <div className="full-item-subtitle">Specialist choose a solution for free your requirements.</div>
                <a href="#" className="info-about-link">Pick up equipment</a>
              </div>
            </div>
          </div>
          <div className="cbc-full-item">
            <div className="full-item-icon"><img src="images/advantage8.png" alt="advantage8" /></div>
            <div className="full-item-title">Furnishing an office key</div>
            <div className="full-item-box d-f">
              <div className="full-item-img"><img src="images/full-office.png" alt="full-office" /></div>
              <div className="full-item-info">
                <div className="full-item-subtitle">Computer technology peripherals, furniture stationery, as well as delicious coffee</div>
                <a href="#" className="info-about-link">Pick up equipment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main