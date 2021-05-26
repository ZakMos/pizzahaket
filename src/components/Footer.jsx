import React, { useRef } from 'react'
import logo from '../images/haket-magic.jpg';
import foodora from '../images/foodora.png';
const Footer = () => {
    const inputRef = useRef(null);
    return (
        <>
        <footer className="mt-auto text-center text-muted">
                <img src={logo} alt="" width="180" className="mb-3"/>
                <ul className="list-inline mt-4">
                    <li  className="list-inline-item"><p className="font-italic">Följ oss</p></li>
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com/pizzahaket/" rel="noreferrer" target="_blank" title="facebook" ref={inputRef}>
                            <i className="fab fa-facebook"></i></a></li>
                    <li className="list-inline-item">
                        <a href="https://www.instagram.com/haket.oriental.magic/?hl=en" rel="noreferrer" target="_blank" title="instagram" ref={inputRef}>
                            <i className="fab fa-instagram"></i></a></li>
                </ul>
                <div className="foodora">
                <p>Du kan beställa här 
                    <a href="https://www.foodora.se/restaurant/new/v4ts/fagersta-pizzahaket" target="_blank" rel="noreferrer">
                        <img src={foodora} alt="foodora" />
                    </a>
                </p>
                </div>
            <p>Pizza Haket &copy; 2021 <strong>Powered By </strong><a id="poweredby" href="zakmos.github.io" target="_blank" ref={inputRef}>ZakMos</a></p>
        </footer>
        </>
    )
}

export default Footer;