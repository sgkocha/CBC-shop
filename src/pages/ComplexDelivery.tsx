import React from 'react'
import CatalogLinks from '../components/CatalogLinks/CatalogLinks'
import DeliveryProducts from '../components/DeliveryProducts/DeliveryProducts'
import ProductList from '../components/ProductList/ProductList'
import "./ComplexDelivery.css"

const ComplexDelivery = () => {
    return (
        <main>
            <section>
                <div className="shop-about d-f align-center">
                    <CatalogLinks />
                    <div className="shop-info">
                        <div className="shop-info-caption">
                            <div className="shop-info-title">Computer store <span>CBC in Newark</span> </div>
                            <div className="shop-info-desc">Supply of computer equipment, service center and services for IT integration companies</div>
                        </div>
                        <div className="service-info-wrap">
                            <div className="service-info-mask"></div>
                            <div className="shop-info-about complex-info-about">
                                <div className="info-about-desc complex-about-desc">Deliveries of computer equipment on a turnkey basis</div>
                                <div className="service-about-subdesc complex-about-subdesc">According to your requirements from CBC in Newark with its own warranty department.
                                    We have been setting up and maintaining IT equipment in the USA for 27 years</div>
                                <a href="#" className="info-about-link">pick up equipment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="complex-delivery-info">
                    <div className="container">
                        <div className="delivery-info-caption d-f align-center">
                            <div className="delivery-info-title">What is complex delivery?</div>
                            <div className="delivery-info-subtitle">Complex delivery means the delivery of several goods on a turnkey basis,
                                which completely cover the need for new computer technology.</div>
                        </div>
                        <h4>For example:</h4>
                        <div className="d-f jc-sb align-center">
                            <p> The construction company is increasing its capacity and <span>increasing its staff from 5 to 20 employees</span>, respectively,
                                it is necessary to equip each new employee with a computer, provide a workplace with a table and an armchair,
                                purchase office equipment and peripherals, paper for the full operation of the whole office
                            </p>
                            <div><img src="images/group1.png" alt="group1" /></div>
                            <div><img src="images/group2.png" alt="group2" /></div>
                            <div><img src="images/group3.png" alt="group3" /></div>
                            <div><img src="images/group4.png" alt="group4" /></div>
                            <p>
                                <span>We know perfectly well</span> which equipment to choose depending on your needs and needs
                                and how it should work and are
                                ready to provide a comprehensive approach for you: from recommendations to equipment supply and testing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="cbc-supplies">
                    <div className="container">
                        <div className="cbc-supplies-title">CBC Center supplies computer equipment and turnkey peripherals for:</div>
                        <div className="cbc-supplies-box d-f">
                            <div className="cbc-supplies-item">
                                <div className="supplies-item-title">offices</div>
                            </div>
                            <div className="cbc-supplies-item"></div>
                            <div className="cbc-supplies-item">
                                <div className="supplies-item-title">WEB STUDIOS</div>
                            </div>
                            <div className="cbc-supplies-item">
                                <div className="supplies-item-title">IT DEPARTMENTS</div>
                            </div>
                            <div className="cbc-supplies-item">
                                <div className="supplies-item-title">CONSTRUCTION COMPANIES</div>
                            </div>
                            <div className="cbc-supplies-item">
                                <div className="supplies-item-title">MEDICAL INSTITUTIONS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="cbc-request">
                    <div className="container d-f align-center">
                        <div className="cbc-request-about">
                            <div className="cbc-request-title">Opening a new office or expanding?</div>
                            <div className="cbc-request-subtitle">We provide computers and peripherals according to your requirements.
                                Your trusted supplier in Newark. We are located in Newark on Harrison Ave.
                            </div>
                            <button className="cbc-request-btn">leave a request</button>
                        </div>

                        <div className="cbc-request-img">
                            <img src="images/cbc-request1.png" alt="cbc-request1" />
                            <img src="images/cbc-request2.png" alt="cbc-request2" />
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <DeliveryProducts
                    title='Monitors'
                    bgcolor='transparent'
                    titleLogo='images/deliveryProduct1.png'
                />
                <DeliveryProducts
                    title='Printers and MFPs'
                    bgcolor=' #F0F0FF'
                    titleLogo='images/deliveryProduct2.png'
                />
                <DeliveryProducts
                    title='Keyboard and mouse'
                    bgcolor='transparent'
                    titleLogo='images/deliveryProduct3.png'
                />
                <DeliveryProducts
                    title='Headphones, speakers'
                    bgcolor=' #F0F0FF'
                    titleLogo='images/deliveryProduct4.png'
                />
                <DeliveryProducts
                    title='Office furniture, stationery (paper, pens, mugs)'
                    bgcolor='transparent'
                    titleLogo='images/deliveryProduct5.png'
                />
                <DeliveryProducts
                    title='Coffee'
                    bgcolor=' #F0F0FF'
                    titleLogo='images/deliveryProduct6.png'
                />



            </section>
        </main>
    )
}

export default ComplexDelivery