import React from 'react'
import Advantage from '../components/Advantage/Advantage'
import CatalogLinks from '../components/CatalogLinks/CatalogLinks'
import PriceCategory from '../components/PriceCategory/PriceCategory'

import "./Service.css"

const Service = () => {
  return (
    <main>
      <section>
        <div className="shop-about d-f align-center">
          <CatalogLinks />
          <div className="shop-info">
            <div className="shop-info-caption">
              <div className="shop-info-title">Computer store <span>CBC in Newark</span> </div>
              <div className="shop-info-desc">Buy, repair and service computer equipment in one place - in the center of SBC-Newark</div>
            </div>
            <div className="service-info-wrap">
              <div className="service-info-mask"></div>
              <div className="shop-info-about service-info-about">
                <div className="info-about-desc service-about-desc">Supplies of computer equipment for offices full construction</div>
                <div className="service-about-subdesc">You don't need to travel to New York to do this. Own service center guarantees the quality,
                  reliability and safety of repairs due to direct contact with manufacturers</div>
                <a href="#" className="info-about-link">VIEW OFFER</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="service-prices">
          <div className="container d-f">
            <div className="cbc-advantages-title">What do we repair, optimize and clean?</div>
            <PriceCategory
              image='images/priceCategory1.png'
              title='Repair and maintenance of computers (monitors)'
              price={4}
            />
            <PriceCategory
              image='images/priceCategory2.png'
              title='Laptop repair and maintenance'
              price={7}
            />
            <PriceCategory
              image='images/priceCategory3.png'
              title='Building a PC from customer components'
              price={11}
            />
            <PriceCategory
              image='images/priceCategory4.png'
              title='Repair of printers and MFDs'
              price={3}
            />
            <PriceCategory
              image='images/priceCategory5.png'
              title='Viruses treatment'
              price={7}
            />
            <PriceCategory
              image='images/priceCategory6.png'
              title='Software installation and setup'
              price={3}
            />
            <PriceCategory
              image='images/priceCategory7.png'
              title='Launching and testing computer equipment'
              price={7}
            />
            <PriceCategory
              image='images/priceCategory8.png'
              title='Data recovery from HDD'
              price={7}
            />
            <PriceCategory
              image='images/priceCategory9.png'
              title='Dust cleaning'
              price={3}
            />
            <PriceCategory
              image='images/priceCategory10.png'
              title='Driver installation'
              price={4}
            />
            <PriceCategory
              image='images/priceCategory11.png'
              title='Windows installation'
              price={10}
            />
          </div>

        </div>
      </section>
      <section>
        <div className="service-renovated">
          <div className="container d-f align-center">
            <div className="service-renovated-img"><img src="images/renovated.png" alt="renovated" /></div>
            <div className="service-renovated-info">
              <div className="service-renovated-title">CBC in Newark began its activity in 1993 from computer repair</div>
              <div className="service-renovated-subtitle">We know how to repair “ancient” and newest computers, work with circuits
                and microchips. We carefully maintain the equipment of enterprises with unique software.
              </div>
              <button className="service-renovated-btn">Order service</button>
            </div>
          </div>
        </div>
      </section>
      <section>
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
          <section>
            <div className="cbc-full-more">
              <div className="container d-f">
                <div className="cbc-full-item">
                  <div className="full-item-icon"><img src="images/advantage9.png" alt="advantage9" /></div>
                  <div className="full-item-title">We solve complex integration tasks computer technology in your business</div>
                  <div className="full-item-box d-f">
                    <div className="full-item-img"><img src="images/difficult-tasks.png" alt="difficult-tasks" /></div>
                    <div className="full-item-info">
                      <div className="full-item-subtitle">We will provide free computer test equipment so that everyone worked as it should</div>
                      <a href="#" className="info-about-link">Introduce equipment</a>
                    </div>
                  </div>
                </div>
                <div className="cbc-full-item">
                  <div className="full-item-icon"><img src="images/advantage10.png" alt="advantage10" /></div>
                  <div className="full-item-title">Do you have many printers? And do they break often?</div>
                  <div className="full-item-box d-f">
                    <div className="full-item-img"><img src="images/printing.png" alt="printing" /></div>
                    <div className="full-item-info">
                      <div className="full-item-subtitle">Let's spend audit of printing equipment and save up to 8 0000 $ in year.</div>
                      <a href="#" className="info-about-link">LEARN HOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="cbc-consultation">
              <div className="container">
                <div className="cbc-consultation-title">Need advice on choosing computer equipment?</div>
                <div className="cbc-consultation-subtitle">Do you have any questions? Submit it in the form below:</div>
                <div className="cbc-consultation-box d-f align-center">
                  <div className="cbc-consultation-img"><img src="images/consultation.png" alt="consultation" /></div>
                  <form className="cbc-consultation-fm">
                    <input type="text" name="userName" placeholder='Name *' />
                    <input type="tel" name="phone" placeholder='+1 --- --- -- -- *' />
                    <input type="text" name="question" placeholder='Your question *' />
                    <button type="submit">Get a consultation</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="cbc-location">
              <div className="container">
                <div className="cbc-location-title">CBC computer store near you in Newark</div>
                <div className="cbc-location-box d-f align-center">
                  <div className="cbc-location-info">
                    <ul className="cbc-location-list">
                      <li className="location-list-item">Newark, Harrison Ave</li>
                      <li className="location-list-item">+1 643 723-09-69</li>
                      <li className="location-list-item">mail@yahoo.com</li>
                      <li className="location-list-item">Write to us on WhatsApp</li>
                      <li className="location-list-item">Mon - Thu: from 9:00 to 19:00 Fri: from 9:00 to 17:00</li>
                      <li className="location-list-item">Sat - Sun: we accept online orders</li>
                    </ul>
                  </div>
                  <div className="cbc-location-map"><img src="images/map.png" alt="map" /></div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>
    </main>
  )
}

export default Service