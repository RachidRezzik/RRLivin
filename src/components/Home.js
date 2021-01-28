import React from 'react'
import {Link} from 'react-router-dom'
//components
import Hero from './Hero'
//images
import about from '../images/home_about.jpg'
import houses from '../images/home_houses.jpg'
import apartments from '../images/home_apartments.jpg'

export default function Home() {
    return (
        <div>
            <div style={{height: "65px"}}></div>
            <Hero />
            <div className="home_about">
                <img src={about} alt="" />
                <div>
                    <h2>About RR Livin'</h2>
                    <p>Operating in Texas since 2008, RR Livin' contains experience and resources to get you into your dream home. Find out more about us or get in touch to see how we can help you!</p>
                    
                    <Link to="/About"><button>Learn More</button></Link>
                    <button>Contact Us</button>
                </div>
            </div>
            <div className="houses_apartments_container">
                <div className="home_houses">
                    <img src={houses} alt="" />
                    <div>
                        <h2>Houses</h2>
                        <p>Looking to own your first home or find your dream home? Explore our house listings to make it a reality!</p>
                        <Link to="/Houses"><button>Check Our House Listings</button></Link>
                    </div>
                </div>
                <div className="home_apartments">
                    <img src={apartments} alt="" />
                    <div>
                        <h2>Apartments</h2>
                        <p>Moving to a new city and need a cozy new apartment? Let RR Livin' help you find it!</p>
                        <Link to="/Houses"><button>Check Our Apartment Listings</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
