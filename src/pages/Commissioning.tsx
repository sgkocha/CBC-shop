import React from 'react'
import Advantage from '../components/Advantage/Advantage'
import CatalogLinks from '../components/CatalogLinks/CatalogLinks'
import Task from '../components/Task/Task'
import "./Commissioning.css"

const Commissioning = () => {
    return (
        <main>
            <section>
                <div className="shop-about d-f align-center commissioning-about">
                    <CatalogLinks />
                    <div className="shop-info commissioning-info">
                        <div className="shop-info-caption">
                            <div className="shop-info-title">Computer store <span>CBC in Newark</span> </div>
                            <div className="shop-info-desc">Supply of computer equipment, service center and services for IT integration companies</div>
                        </div>
                        <div className="shop-info-about commissioning-info-about">
                            <h3>We solve complex problems of commissioning of computer technology</h3>
                            <div className="info-about-desc">We have been working since 1993, we know suppliers well, we set up,
                                integrate and launch according to the most demanding specifications.
                                We provide equipment for testing free of charge at the time you need</div>
                            <a href="#" className="info-about-link">start the equipment</a>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="commissioning-purchase">
                    <div className="container">
                        <div className="commissioning-purchase-caption d-f align-center">
                            <div className="commissioning-purchase-img"><img src="images/purchase-logo.png" alt="purchase-logo" /></div>
                            <div className="commissioning-purchase-title">Your company has a need to purchase equipment,
                                but there are no full-time specialists in these matters - it does not matter.
                            </div>
                        </div>
                        <div className="commissioning-purchase-box d-f align-center">
                            <p>
                                <span>CBC</span> not only supplies good equipment, but also <span>performs commissioning of equipment</span>.
                                We will easily set up the equipment in your office so that nothing distracts you
                                and your employees from work
                            </p>
                            <div><img src="images/start-equipment.png" alt="start-equipment" /></div>
                            <p>
                                Over the years on the market, <span>we have implemented a large</span> number of projects and we know what
                                and how best to do. We analyze the current state of equipment in the office and offer you the best solution
                                for implementation and debugging.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="cbc-tasks">
                    <div className="container">
                        <div className="cbc-tasks-title">What tasks do we solve?</div>
                        <div className="cbc-tasks-box d-f">
                            <Task
                                image='images/task-logo1.png'
                                title='Integration of any compatible software'
                            />
                            <Task
                                image='images/task-logo2.png'
                                title='Integration of saving systems and print control'
                            />
                            <Task
                                image='images/task-logo3.png'
                                title='Installing the necessary system components'
                            />
                            <Task
                                image='images/task-logo4.png'
                                title='User identification system integration'
                            />
                            <Task
                                image='images/task-logo5.png'
                                title='Selection of the necessary equipment for your and jointly developed TK'
                            />
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
                <div className="cbc-service">
                    <div className="container d-f">
                        <div className="cbc-service-info">
                            <div className="cbc-service-title">Computer repair and maintenance technicians at the SBC service center</div>
                            <div className="cbc-service-subtitle">We repair computers, laptops, office equipment, server equipment</div>
                            <a href="#" className="cbc-service-more">VIEW THE SERVICES OF SERVICE CENTER</a>
                        </div>
                        <div className="cbc-service-img"><img src="images/service.png" alt="service" /></div>
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
                        <div className="cbc-consultation-title" style={{ width: "990px", margin: "0 auto" }}>Want to get a free consultation 
                        on commissioning turnkey computer equipment?</div>
                        <div className="cbc-consultation-subtitle" style={{ width: "674px", margin: "12px auto" }}>After setting up the equipment,
                            you can get computers for your requirements for <span style={{ color: "#FFAF37" }}>free testing</span>
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

export default Commissioning