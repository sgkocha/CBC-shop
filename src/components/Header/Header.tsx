import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-bar d-f jc-sb align-center">
                    <div className="header-logo">
                        <Link to={"/"}><img src="images/logo.png" alt="CBC" /></Link>  
                    </div>
                    <div>
                        <nav>
                            <ul className="nav-list d-f">
                                <li className="nav-list-item"><Link to={"service"}>Service center</Link></li>
                                <li className="nav-list-item"><a href="#">Shipping and payment</a></li>
                                <li className="nav-list-item"><Link to={"catalog"}>Catalog</Link></li>
                                <li className="nav-list-item"><a href="#">Personal Area</a></li>
                                <li className="nav-list-item"><a href="#">About company</a></li>
                                <li className="nav-list-item"><a href="#">Contacts</a></li>
                            </ul>
                        </nav>
                        <div className="header-about d-f">
                            <div className="company-desc">CBC is a reliable supplier of computer equipment near you. 28 years in Newark</div>
                            <div className="phone-order d-f align-center">
                                <div className="phone-number">+1 643 723-09-69</div>
                                <button className="call-btn">REQUEST A CALL</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="header-search-contacts d-f jc-sb align-center">
                    <form className="search-fm d-f jc-sb">
                        <input type="text" name='searchQuery' className='search-input' placeholder='Search' />
                        <button type="submit" className="search-btn"><img src="images/search.png" alt="search" /></button>
                    </form>
                    <div className="header-contacts d-f align-center">
                        <div className="header-contacts-item">WhatsApp</div>
                        <div className="header-contacts-item">mail@yahoo.com</div>
                        <div className="header-contacts-item">Newark, New Jersey <span>United States of America</span></div>
                    </div>
                </div>
            </div>
            <div className="header-links">
                <div className="container">
                    <nav>
                        <ul className="nav-list d-f jc-sb">
                            <li className="nav-list-item"> <Link to={"complex"}>Complex delivery</Link></li>
                            <li className="nav-list-item"><Link to={"commissioning"}>Commissioning IT equipment</Link></li>
                            <li className="nav-list-item"><Link to={"audit"}>Audit and optimization print park</Link></li>
                            <li className="nav-list-item"><Link to={"tenders"}>Tenders</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header