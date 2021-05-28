// import React, { useState } from 'react';
import React from 'react';
import { ProductsJson } from '../ProductsJson';

export default function Products  () {
    // const [isFlipped, setIsFlipped] = useState(false);
    // const handleClick = () => {
    //     setIsFlipped(!isFlipped)
    // }; 
    
    return (
        <>
            <div id="products"></div>
            <h1 className="products-header">All slags grill på träkol</h1>   
            <ul className="products"> {ProductsJson.map((item, index) => {
                return ( 
                    <li key={index}>
                          <div data-aos="fade-down" data-aos-duration="1000" className="products-title">{item.title}</div>
                        <div> <img data-aos="fade-up" className="products-image"  src={item.img} alt="" /></div>
                    </li>
                )
            })}
            </ul>
            {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div>
                This is front...
                <button onClick={handleClick}> Click to flip</button>

            </div>
            <div>
                this is back
                <button onClick={handleClick}> click to flip</button>
            </div>
        </ReactCardFlip> */}
        </>
    )
}

