import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
//components
import Hero from './Hero'
//images
import about from '../images/home_about.jpg'
import houses from '../images/home_houses.jpg'
import apartments from '../images/home_apartments.jpg'

export default function Home() {
    
    useEffect(() => {
        AOS.init({})
    }, [])

    const handleLinkClick = () => {
        window.scrollTo({
            top: 0
        })
    }

    return (
        <div style={{overflow: "hidden", marginBottom: "75px"}}>
            <div style={{height: "65px"}}></div>
            <Hero />
            <div data-aos="fade-up" data-aos-delay="125" data-aos-offset="275" data-aos-duration="800" data-aos-once="true">
                <h1 className="difference">Experience the RR Livin' Difference</h1>
                <div className="home_about">
                    <img src={about} alt="" />
                    <div>
                        <h2>RR Livin'</h2>
                        <p>Operating in Texas since 2009, RR Livin' contains the experience and resources to get you into your dream home. Find out more about us or get in touch to see how we can help you!</p>
                        <div className="button_container">
                            <Link onClick={handleLinkClick} to="/About"><button>Learn More</button></Link>
                            <Link onClick={handleLinkClick} to="/Contact"><button>Contact Agent</button></Link>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="home_houses" data-aos="fade-up" data-aos-delay="125" data-aos-offset="275" data-aos-duration="800" data-aos-once="true">
                <div id="houses_div">
                    <h2>Houses</h2>
                    <p>Looking to own your first home or find your dream home? Explore our house listings to make it a reality!</p>
                    <div className="button_container">
                        <Link onClick={handleLinkClick} to="/Houses">
                        <button>Check Our House Listings</button></Link>
                    </div>
                </div>
                <img id="houses_img"src={houses} alt="" />
            </div>
            <div className="home_apartments" data-aos="fade-up" data-aos-delay="125" data-aos-offset="275" data-aos-duration="800" data-aos-once="true">
                <img src={apartments} alt="" />
                <div>
                    <h2>Apartments</h2>
                    <p>Moving to a new city and need a cozy new apartment? Let RR Livin' help you find it!</p>
                    <div className="button_container">
                        <Link onClick={handleLinkClick} to="/Apartments"><button>Check Our Apartment Listings</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
