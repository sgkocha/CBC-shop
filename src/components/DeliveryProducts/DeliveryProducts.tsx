import { type } from 'os'
import React from 'react'
import ProductListItem from '../ProductListItem/ProductListItem'

type DeliveryProductsProps = {
    title: string
    bgcolor: string
    titleLogo: string;
}

const DeliveryProducts = ({ title, bgcolor, titleLogo }: DeliveryProductsProps) => {
    return (
        <div style={{ backgroundColor: bgcolor, marginTop: "100px", paddingTop: "27px", paddingBottom: "27px" }}>
            <div className="container">
                <div style={{ background: `url(${titleLogo}) no-repeat`, paddingLeft: "54px", paddingBottom: "30px",
                    fontWeight: 500, fontSize: "36px", lineHeight: "43px", color: " #4A4D4A" }}>
                    {title}
                </div>
                <div className="d-f" style={{ gap: "50px", marginTop: "30px"}}>
                    <ProductListItem
                        image='images/product1.png'
                        title='Smartphone Xiaomi Poco X3 Pro 128Gb 6Gb blue'
                        vendor={1514353}
                        price={343}
                    />
                    <ProductListItem
                        image='images/product2.png'
                        title='In-ear headset Digma TWS-10 white wireless'
                        vendor={1151107}
                        price={15}
                    />
                    <ProductListItem
                        image='images/product3.png'
                        title='Smart watch Jet Kid Pinkie Pie 40mm 1.44" TFT pink'
                        vendor={1178769}
                        price={52}
                    />
                    <ProductListItem
                        image='images/product4.png'
                        title='Tablet Apple iPad Air 2020 MYH42RU/A A14'
                        vendor={1419381}
                        price={1477}
                    />
                    <ProductListItem
                        image='images/product4.png'
                        title='Tablet Apple iPad Air 2020 MYH42RU/A A14'
                        vendor={1419381}
                        price={1477}
                    />
                    <ProductListItem
                        image='images/product4.png'
                        title='Tablet Apple iPad Air 2020 MYH42RU/A A14'
                        vendor={1419381}
                        price={1477}
                    />
                </div>
                <a href="#" 
                  style={{ background: "url(images/arrow-all.png) no-repeat 95%", display: "block", marginTop: "30px",
                  fontWeight: 500, fontSize: "18px", lineHeight: "21px", color: "#4A4D4A", textDecoration: "none",
                   width: "100px", marginLeft: "88%"}}>
                     See all
                </a>
            </div>

        </div>
    )
}

export default DeliveryProducts