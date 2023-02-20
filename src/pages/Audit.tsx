import React from 'react'
import CatalogLinks from '../components/CatalogLinks/CatalogLinks'
import "./Audit.css"

const Audit = () => {
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
                        <div className="shop-info-about audit-info-about">
                            <h3>Do you print a lot at work? Have to constantly repair MFP and change cartridges?</h3>
                            <div className="info-about-desc">Reduce printer maintenance costs by over 50%
                                by optimizing your office print fleet.</div>
                            <a href="#" className="info-about-link">get a free audit</a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="audit-plan">
                    <div className="container">
                        <div className="audit-plan-title">Work stages</div>
                        <div className="audit-plan-box d-f">
                            <div><img src="images/plan.png" alt="plan" /></div>
                            <div><img src="images/audit-result.png" alt="audit-result" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="cbc-optimization">
                    <div className="container">
                        <div className="cbc-optimization-caption d-f align-center">
                            <div><img src="images/printer-logo.png" alt="printer-logo" /></div>
                            <div className="cbc-optimization-title">How do we optimize the printer fleet? on the example of JSC "ITT"</div>
                        </div>
                        <div className="cbc-optimization-box d-f align-center">
                            <div className="cbc-optimization-item">
                                <div className="optimization-item-caption d-f align-center">
                                    <div className='optimization-item-num'>1</div>
                                    <div className='optimization-item-title'>Task:</div>
                                </div>
                                <p>
                                    Conduct remote monitoring of 25 printing devices in the enterprise. Since the enterprise has
                                    a certain class of secrecy, it is necessary to track the information that employees print out and provide
                                    them access by PIN codes or smart cards
                                </p>
                            </div>
                            <div className="cbc-optimization-item">
                                <div className="optimization-item-caption d-f align-center">
                                    <div className='optimization-item-num'>2</div>
                                    <div className='optimization-item-title'>Solution:</div>
                                </div>
                                <p>
                                    We have implemented a monitoring and control system for printing, which allows you to control problem areas. A virtual machine was allocated on the shared server, where the monitoring system was installed.
                                    Using extensive settings, SVS staff set up access to each MFP and feedback to it
                                    (in the event of an error on the MFP). We also distributed print quotas for each employee, with a large amount of printing, the job went to a printer with a print cost lower than in a desktop version. In addition, when the monitoring system was put into operation, "accidental" printing of unedited pages was reduced, not those documents and similar cases. Thus, the printing of unnecessary documents has been reduced.
                                </p>
                            </div>
                            <div className="cbc-optimization-item">
                                <div className="optimization-item-caption d-f align-center">
                                    <div className='optimization-item-num'>3</div>
                                    <div className='optimization-item-title'>Result:</div>
                                </div>
                                <p>
                                    Costs for cartridges were reduced by 32% (~ 5.143 $ / year), for paper by 13% (~ 1.714 $ / year). The time spent on maintenance of the printing park is 30 man-hours per month. And a nice bonus is the unification of cartridges and free space in the warehouse. The total budget for this solution was $1,386.
                                </p>
                            </div>
                            <div className="cbc-optimization-item">
                                <div className="optimization-item-title">Profit:</div>
                                <div className="optimization-item-profit">6857 $ / year</div>
                            </div>
                            <button className='cbc-optimization-btn'>order adjustment</button>
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
                        <div className="cbc-consultation-title" style={{ width: "833px", margin: "0 auto" }}>Would you like a free printer fleet analysis?</div>
                        <div className="cbc-consultation-subtitle" style={{ width: "643px", margin: "12px auto" }}>Do you have any questions?   Submit it in the form below:
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

export default Audit