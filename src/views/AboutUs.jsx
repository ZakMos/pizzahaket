import React from 'react'
import $ from 'jquery';
const Contact = () => {
    $(document).ready(function() {
        $('.opening-hours li').eq(new Date().getDay()).addClass('today');
        });
    return (
        <>
        <div id="aboutUs"></div>     
        <h1 className="about-us-header">Hatta Oss</h1> 
        <div className="container aboutUs-oh">
            <div className="row">
                <div className="col-sm-2 mainAddress">
                    <div className="text-center">
                        <p>Järnvägsgatan 3A,</p>
                        <p>737 32 Fagersta,</p>
                        <p>Svenska</p>
                        <p>Tel: 0223-16999</p>
                    </div>
                </div>
                <div className="col-sm-6 about-us-map">
                <div className="text-center"
                    tabIndex={1} 
                    onTouchMove={(e) => {
                        if(e.currentTarget === e.target) {
                            console.log('touch Move self');
                        } else {
                            console.log('Touch Move child', e.target);
                        }
                        if(!e.currentTarget.contains(e.relatedTarget)) {
                            console.log('Touch Move entered self');
                        }
                    }}
                    onScroll={(e) => {
                        if(e.currentTarget === e.target) {
                            console.log('Scroll self');
                        } else {
                            console.log('Scroll child', e.target);
                        }
                        if(!e.currentTarget.contains(e.relatedTarget)) {
                            console.log('Scroll entered self');
                        }
                    }}>
                    <iframe title="Pizzeria Haket"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.88265305880304!2d15.815996700000001!3d59.9896945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465dc21335c8faf7%3A0x338f79c32eaf7037!2sPizzeria%20haket!5e0!3m2!1sen!2sde!4v1621853408373!5m2!1sen!2sde"
                        allowFullScreen="" 
                        loading="lazy"
                        frameBorder="0" 
                        cancelable="true"
                        style={{border:'solid black 2px',
                                width: '90%',
                                height: 350}} 
                        aria-hidden="false" tabIndex="0">
                    </iframe>
                </div>
                </div>
                <div className="col-sm-4">
                    <div className="business-hours">
                        <h2 className="title">Öppettider</h2>
                            <ul className="list-unstyled opening-hours">
                                <li>Söndag <span className="pull-right">11:00-21:00</span></li>
                                <li>Måndagar <span className="pull-right">11:00-21:00</span></li>
                                <li>Tisdag <span className="pull-right">11:00-21:00</span></li>
                                <li>Onsdag <span className="pull-right">11:00-21:00</span></li>
                                <li>Torsdag <span className="pull-right">11:00-21:00</span></li>
                                <li>Fredag <span className="pull-right">11:00-22:00</span></li>
                                <li>Lördag <span className="pull-right">11:00-22:00</span></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Contact;