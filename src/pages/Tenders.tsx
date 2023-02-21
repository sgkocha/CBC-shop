import React from 'react'
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
        </main>
    )
}

export default Tenders