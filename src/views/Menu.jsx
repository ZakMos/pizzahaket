import React, { useState, useRef } from "react";
import  menuQrcode from '../images/MenuQrcode300.png';
import Carousel from "react-bootstrap/Carousel";

const images = [
    {  img: require('../images/menu01.jpg').default
    },
    {  img: require('../images/menu02.jpg').default
    },
    {  img: require('../images/menu03.jpg').default
    },
    {  img: require('../images/menu04.jpg').default
    },
  
];

function Menu() {
    const inputRef = useRef(null);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
        <div id="menu"></div>
        <div className="menu-main">
            <h1 className="menu-header">Meny</h1>
        <Carousel>
            {images.map((item, i) => (
                <Carousel.Item key={i} 
                                activeIndex={index} 
                                onSelect={handleSelect}> 
                    <img src={item.img} alt=""/>
                </Carousel.Item>
            ))}
        </Carousel>
        <div className="menu-links">
            <a href="https://bit.ly/3vm4NiI" target="blank" ref={inputRef}>Nedladdningsmeny</a>
            <img src={ menuQrcode } alt="Menu Qr Code" />
        </div>
        </div> 
        </>


    );
}

export default Menu;
