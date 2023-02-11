import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container d-f jc-sb">
            <div className="footer-about">
                <div className="footer-logo"><img src="images/logo.png" alt="CBC" /></div>
                <div className="footer-desc">CBC is a reliable supplier of computer equipment near you. 28 years in Newark</div>
            </div>
            <div className="footer-item">
                <div className="footer-item-title">Popular categories</div>
                <ul className="footer-item-list">
                    <li><a href="#">Computer supplies and accessories</a></li>
                    <li><a href="#">Printers and Multifunction devices</a></li>
                    <li><a href="#">Video cards</a></li>
                    <li><a href="#">Cartridges</a></li>
                    <li><a href="#">Promotions</a></li>
                </ul>
            </div>
            <div className="footer-item">
                <div className="footer-item-title">Services</div>
                <ul className="footer-item-list">
                    <li><a href="#">Deliveries of cartridges to the office</a></li>
                    <li><a href="#">Equipment commissioning</a></li>
                    <li><a href="#">Audit of the printing equipment fleet</a></li>
                </ul>
            </div>
            <div className="footer-item">
                <div className="footer-item-title">Information</div>
                <ul className="footer-item-list">
                    <li><a href="#">Shipping and payment</a></li>
                    <li><a href="#">Warranty</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">About CBC company</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-item">
                <ul className="footer-item-list">
                    <li><a href="#"><img src="images/social1.png" alt="social1" /></a></li>
                    <li><a href="#"><img src="images/social2.png" alt="social2" /></a></li>
                    <li><a href="#"><img src="images/social3.png" alt="social3" /></a></li>
                    <li><a href="#"><img src="images/social4.png" alt="social4" /></a></li>
                </ul>
            </div>
            <div className="footer-item">
                <div className="footer-item-title">Contacts</div>
                <ul className="footer-item-list">
                    <li>+1 643 723-09-69</li>
                    <li>mail@yahoo.com</li>
                    <li>Newark, Harrison Ave</li>
                </ul>
                <div className="footer-payments"><img src="images/payments.png" alt="payments" /></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer