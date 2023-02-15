import React from 'react'
import HitProduct from '../HitProduct/HitProduct'
import "./HitProductsList.css"

const PromotionHitProducts = () => {
  return (
    <div className='hit-products'>
        <div className="container d-f">
            <div className="hit-products-caption">
                <div className="products-promotion-title d-f jc-sb">
                    <div className="promotion-products-title">Choose from promotions in CBC</div>
                    <div className="promotion-products-img"><img src="images/promotion.png" alt="promotion" /></div>
                </div>
                <div className="products-hit-title d-f jc-sb">
                    <div className="promotion-products-title">Top sellers in CBC</div>
                    <div className="promotion-products-img"><img src="images/hit.png" alt="hit" /></div>
                </div>
                <a href="#" className="products-caption-all">See all</a>
            </div>
            <HitProduct 
               image='images/hit-product.png'
               title='MFP laser Kyocera Ecosys M3145dn (1102TF3NL0) A4 Duplex Net white/black'
               vendor={1097110}
               price={934} 
            />
            <HitProduct 
               image='images/hit-product.png'
               title='MFP laser Kyocera Ecosys M3145dn (1102TF3NL0) A4 Duplex Net white/black'
               vendor={1097110}
               price={934} 
            />
            <HitProduct 
               image='images/hit-product.png'
               title='MFP laser Kyocera Ecosys M3145dn (1102TF3NL0) A4 Duplex Net white/black'
               vendor={1097110}
               price={934} 
            />
               <HitProduct 
               image='images/hit-product.png'
               title='MFP laser Kyocera Ecosys M3145dn (1102TF3NL0) A4 Duplex Net white/black'
               vendor={1097110}
               price={934} 
            />
            <HitProduct 
               image='images/hit-product.png'
               title='MFP laser Kyocera Ecosys M3145dn (1102TF3NL0) A4 Duplex Net white/black'
               vendor={1097110}
               price={934} 
            />
            <HitProduct 
               image='images/hit-product.png'
               title='MFP laser Kyocera Ecosys M3145dn (1102TF3NL0) A4 Duplex Net white/black'
               vendor={1097110}
               price={934} 
            />
            <HitProduct 
               image='images/hit-product.png'
               title='MFP laser Kyocera Ecosys M3145dn (1102TF3NL0) A4 Duplex Net white/black'
               vendor={1097110}
               price={934} 
            />
        </div>
    </div>
  )
}

export default PromotionHitProducts