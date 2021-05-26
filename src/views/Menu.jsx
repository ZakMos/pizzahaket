import React, { useRef } from "react";
import  menuQrcode from '../images/MenuQrcode300.png';
import { ImageGroup, Image } from 'react-fullscreen-image';

const images = [
    {  img: require('../images/menu01.jpg').default
    },
    {  img: require('../images/menu02.jpg').default
    },
    {  img: require('../images/menu03.jpg').default
    },
    {  img: require('../images/menu04.jpg').default
    },
  
]
const Menu = () => {
    const inputRef = useRef(null);
    return (
        <>
        <div id="menu"></div>
        <h1 className="menu-header">Meny</h1> 
            <ImageGroup>
                <ul className="menu-image">
                    {images.map((item, index)=>(
                        <li key={index}>
                            <Image src={item.img} alt="Menu"/>
                        </li>
                    ))}
                </ul>
            </ImageGroup>
        <div className="menu-links">
            <a href="https://bit.ly/3vm4NiI" target="blank" ref={inputRef}>Nedladdningsmeny</a>
            <img src={ menuQrcode } alt="Menu Qr Code" />
        </div>

     
        </>
    )
}

export default Menu
