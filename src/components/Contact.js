import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
//images
import dallas from '../images/dallas.jpg'
import austin from '../images/austin.jpg'
import houston from '../images/houston.jpg'
import san_antonio from '../images/san_antonio.jpg'

export default function Contact() {
    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <div style={{paddingTop: "65px"}}>
            <h1 className="contact_headline" data-aos="fade-in" data-aos-duration="1250">RR Livin' Locations</h1>
            <p className="come_in" data-aos="fade-in" data-aos-duration="1250">Come in or give any of our offices a call and one of our expert agents will be sure to help!</p>
            <div className="locations_container">
                <div className="location" data-aos="fade-in" data-aos-duration="1250" data-aos-offset="250">
                    <h2>Dallas</h2>
                    <div className="image_container">
                        <img src={dallas} alt="" />
                    </div>
                    <h4>Address:</h4>
                    <h4>Phone:</h4>
                </div>
                <div className="location" data-aos="fade-in" data-aos-duration="1250" data-aos-offset="250">
                    <h2>San Antonio</h2>
                    <div className="image_container">
                        <img src={san_antonio} alt="" />
                    </div>
                    <h4>Address:</h4>
                    <h4>Phone:</h4>
                </div>
                <div className="location" data-aos="fade-in" data-aos-duration="1250" data-aos-offset="250">
                    <h2>Houston</h2>
                    <div className="image_container">
                        <img src={houston} alt="" />
                    </div>
                    <h4>Address:</h4>
                    <h4>Phone:</h4>
                </div>
                <div className="location" data-aos="fade-in" data-aos-duration="1250" data-aos-offset="250">
                    <h2>Austin</h2>
                    <div className="image_container">
                        <img src={austin} alt="" />
                    </div>
                    <h4>Address:</h4>
                    <h4>Phone:</h4>
                </div>
            </div>    
        </div>
    )
}
