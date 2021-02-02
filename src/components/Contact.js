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
            <h1 className="contact_headline">RR Livin' Locations</h1>
            <p className="come_in">Come in or give any of our offices a call and one of our expert agents will be sure to help!</p>
            <div className="locations_container">
                <div className="location">
                    <h2>Dallas</h2>
                    <div className="image_container">
                        <img src={dallas} alt="" />
                    </div>
                    <h4>Address: 11520 Baker Street, Dallas, TX</h4>
                    <h4>Phone: 214-350-8250</h4>
                </div>
                <div className="location">
                    <h2>San Antonio</h2>
                    <div className="image_container">
                        <img src={san_antonio} alt="" />
                    </div>
                    <h4>Address: 11850 Luella, San Antonio, TX</h4>
                    <h4>Phone: 210-333-8921</h4>
                </div>
                <div className="location">
                    <h2>Houston</h2>
                    <div className="image_container">
                        <img src={houston} alt="" />
                    </div>
                    <h4>Address: 15601 Blue, Houston, TX</h4>
                    <h4>Phone: 832-444-8321</h4>
                </div>
                <div className="location">
                    <h2>Austin</h2>
                    <div className="image_container">
                        <img src={austin} alt="" />
                    </div>
                    <h4>Address: 19923 Jordan Avenue, Austin, TX</h4>
                    <h4>Phone: 512-678-2233</h4>
                </div>
            </div>    
        </div>
    )
}
