import React from 'react'
import "./ProductFilter.css"

const ProductFilter = () => {
    return (
        <div className="product-filter">
            <div className="product-filter-title">Filter by parameters</div>
            <div className="product-filter-price">
                <div className='d-f jc-sb'>
                    <div className="filter-price-title">Price</div>
                    <button className="filter-price-btn"><img src="images/arrow-up.png" alt="arrow-up" /></button>
                </div>
                <div className='numbers-input-bl d-f align-center'>
                    <input type="number" className='price-min' placeholder='24' />
                    <div>-</div>
                    <input type="number" className='price-max' placeholder='3000' />
                </div>
                <div className='price-range'>
                    <div className='number-caption d-f jc-sb'>
                        <div>24</div>
                        <div>3000</div>
                    </div>
                    <input type="range" className='range-input' min={24} max={3000} />
                </div>
            </div>
            <div className="product-filter-brand">
                <div className='d-f jc-sb'>
                    <div className="filter-brand-title">Brand</div>
                    <button className="filter-price-btn"><img src="images/arrow-up.png" alt="arrow-up" /></button>
                </div>
                <div className="filter-brand-choose">
                    <div className='d-f align-center'> <input type="checkbox" name="alcatel" id="alcatel" /> <label htmlFor="alcatel">Alcatel</label> </div>
                    <div className='d-f align-center'> <input type="checkbox" name="apple" id="apple" /> <label htmlFor="apple">Apple</label> </div>
                    <div className='d-f align-center'> <input type="checkbox" name="samsung" id="samsung" /> <label htmlFor="samsung">Samsung</label> </div>
                    <div className='d-f align-center'> <input type="checkbox" name="xiaomi" id="xiaomi" /> <label htmlFor="xiaomi">Xiaomi</label> </div>
                </div>
            </div>
            <div className="product-filer-actions d-f">
                <button className="product-filter-show">Show</button>
                <button className="product-filter-reset">Reset</button>
            </div>
        </div>
    )
}

export default ProductFilter