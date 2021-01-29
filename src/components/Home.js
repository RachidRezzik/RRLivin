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

    return (
        <div style={{overflow: "hidden", marginBottom: "75px"}}>
            <div style={{height: "65px"}}></div>
            <Hero />
            <h1 className="difference" data-aos="fade" data-aos-delay="150">Experience the RR Livin' Difference</h1>
            <div className="home_about" data-aos="fade-up" data-aos-delay="150" data-aos-offset="275">
                <img src={about} alt="" />
                <div>
                    <h2>RR Livin'</h2>
                    <p>Operating in Texas since 2009, RR Livin' contains the experience and resources to get you into your dream home. Find out more about us or get in touch to see how we can help you!</p>
                    
                    <Link to="/About"><button>Learn More</button></Link>
                    <button>Contact Us</button>
                </div>
            </div>
            
            <div className="home_houses" data-aos="fade-up" data-aos-delay="150" data-aos-offset="275">
                <div>
                    <h2>Houses</h2>
                    <p>Looking to own your first home or find your dream home? Explore our house listings to make it a reality!</p>
                    <Link to="/Houses"><button>Check Our House Listings</button></Link>
                </div>
                <img src={houses} alt="" />
            </div>
            <div className="home_apartments" data-aos="fade-up" data-aos-delay="150" data-aos-offset="275">
                <img src={apartments} alt="" />
                <div>
                    <h2>Apartments</h2>
                    <p>Moving to a new city and need a cozy new apartment? Let RR Livin' help you find it!</p>
                    <Link to="/Houses"><button>Check Our Apartment Listings</button></Link>
                </div>
            </div>
        </div>
    )
}
