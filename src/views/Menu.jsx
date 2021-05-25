import React from 'react'
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
  
    return (
        <>
        <div id="menu"></div>
        <div className="menu-items">
        <ImageGroup>
            <ul className="menu-image">
                {images.map((item, index)=>(
                    <li key={index}>
                        <Image src={item.img} alt="Menu"/>
                    </li>
                ))}
            </ul>
        </ImageGroup>
        </div>
        </>
    )
}

export default Menu
