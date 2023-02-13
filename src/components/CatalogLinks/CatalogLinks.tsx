import React from 'react'
import { Link } from "react-router-dom";
import "./CatalogLinks.css"

const CatalogLinks = () => {
  return (
    <div className= "catalog-links">
        <div className="catalog-links-title">Catalog</div>
        <ul className="catalog-links-list">
            <li className="links-list-item d-f jc-sb">
               <span>Computers and  accessories</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
               <span>Periphery and accessories</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span> Digital photo and video</span>
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>Network hardware</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>Consumables</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>Smartphones, tablets  and accessories</span> 
                <Link to={"catalog"}>
                    <img src="images/arrow-right.png" alt="arrow-right" />
                </Link>
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>TVs, audio video technique and accessories</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>Automotive and electronics</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>Security systems and engineering equipment</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>Sports, active recreation, hobby</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>Office equipment</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>Stationery and furniture</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>Promotions</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
            <li className="links-list-item d-f jc-sb">
                <span>New items</span> 
                <img src="images/arrow-right.png" alt="arrow-right" />
            </li>
        </ul>
    </div>
  )
}

export default CatalogLinks