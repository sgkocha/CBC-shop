import React from 'react'
import Advantage from '../components/Advantage/Advantage'
import CatalogLinks from '../components/CatalogLinks/CatalogLinks'
import "./Tenders.css"

const Tenders = () => {
    return (
        <main>
            <section>
                <div className="shop-about tenders-about d-f align-center">
                    <CatalogLinks />
                    <div className="shop-info tenders-info">
                        <div className="shop-info-caption">
                            <div className="shop-info-title">Computer store <span>CBC in Newark</span> </div>
                            <div className="shop-info-desc">Supply of computer equipment, service center and services for IT integration companies</div>
                        </div>
                        <div className="shop-info-about tenders-info-about">
                            <h3>We work with government clients</h3>
                            <div className="info-about-desc">Selecting computer equipment according to the most demanding specifications.
                                We will help to draw up a TOR if necessary</div>
                            <a href="#" className="info-about-link">ask a question about tenders</a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="tenders-accreditation">
                    <div className="container">
                        <div className="tenders-accreditation-title">
                            <span>CBC is accredited</span> as a supplier in state and commercial procurement of computer
                            and printing equipment at almost all sites
                        </div>
                        <div className="tenders-accreditation-subtitle">
                            The team of the CBC Computer Technology Center can not only select the optimal equipment for you,
                            but also launch <span>the procurement procedure in accordance with the relevant standards</span>
                        </div>
                        <div className="tenders-accreditation-box d-f align-center">
                            <p>
                                <span>We will prepare</span> for you the terms of reference, all the necessary documents
                                and make the delivery just in time
                            </p>
                            <div><img src="images/tor-data.png" alt="tor-data" /></div>
                            <p>
                                <span>For 5 years of working</span> with tenders, we have completed <span>several dozens</span> of our
                                own tenders, which were successfully carried out from the very beginning to the end of the project
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="tenders-recommendations">
                    <div className="container">
                        <div className="tenders-recommendations-title">Recommendations from CBC</div>
                        <div className="tenders-recommendations-box d-f">
                            <div className="tenders-recommendations-item">
                                <div className="recommendations-item-title">You need</div>
                                <p>
                                    prepare documentation, technical specifications or specifications for the supply
                                    of IT equipment, printing equipment
                                </p>
                            </div>
                            <div className="tenders-recommendations-item">
                                <div className="recommendations-item-title">We recommend </div>
                                <p>
                                    pay special attention to the correct spelling of this assignment. A clearly defined composition, characteristics
                                    and properties of goods can significantly reduce the risk of obtaining low-quality products or products of an unknown manufacturer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="tenders-documentation">
                    <div className="container">
                        <div className="tenders-documentation-title">Our experts will be happy to assist you in the preparation
                            of tender documentation at all stages:
                        </div>
                        <div className="tenders-documentation-box d-f jc-sb">
                            <div className="tenders-documentation-item d-f align-center">
                                <div><img src="images/documentation-logo1.png" alt="documentation-logo1" /></div>
                                <p>Consultations and selection of necessary equipment</p>
                            </div>
                            <div className="tenders-documentation-item d-f align-center">
                                <div><img src="images/documentation-logo2.png" alt="documentation-logo2" /></div>
                                <p>Calculation of the cost of the project, registration of prices and the project with the manufacturer</p>
                            </div>
                            <div className="tenders-documentation-item d-f align-center">
                                <div><img src="images/documentation-logo3.png" alt="documentation-logo3" /></div>
                                <p>Preparation of terms of reference and calculation of NMTsK</p>
                            </div>
                        </div>
                        <div className="tenders-documentation-mail">We are waiting for your invitations to participate
                            in tenders by e-mail: <span>mail@yahoo.com</span></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="tenders-technical">
                    <div className="container">
                        <div className="tenders-technical-title">We know everything about the technical characteristics
                            of a computer equipment</div>
                        <div className="tenders-technical-box d-f">
                            <div className="tenders-technical-item">
                                <div className="technical-item-title">We know the features of the work of computers of all brands.</div>
                            </div>
                            <div className="tenders-technical-item">
                                <div className="technical-item-title">We'll deliver to your budget.</div>
                            </div>
                            <div className="tenders-technical-item">
                                <div className="technical-item-title">We will help to competently form TOR for tenders</div>
                            </div>
                            <div className="tenders-technical-item">
                                <div className="technical-item-title">We focus on the variety of technical characteristics of IT-
                                    equipment and peripherals</div>
                            </div>
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
                </div>
            </section>
            <section>
                <div className="cbc-consultation">
                    <div className="container">
                        <div 
                            className="cbc-consultation-title" 
                            style={{ width: "813px", margin: "0 auto" }}>
                            Do you want to get a free consultation in the preparation of TOR on participation in tenders?
                        </div>
                        <div 
                            className="cbc-consultation-subtitle" 
                            style={{ width: "643px", margin: "12px auto" }}>
                            Do you have any questions?   Submit it in the form below:
                        </div>
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
                                    <a href="#" className="info-about-link">ASSEMBLE OFFICE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="cbc-full-more" style={{marginTop: "30px"}}>
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
        </main>
    )
}

export default Tenders