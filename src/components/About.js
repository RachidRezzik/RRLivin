import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
//images
import founders from '../images/founders.jpg'
import agents from '../images/about_intro.jpg'
import tech from '../images/about_tech.jpg'

export default function About() {
    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <div style={{paddingTop: "65px"}}>
            <h1 className="about_headline" data-aos="fade-in" data-aos-duration="750">About RR Livin'</h1>
            <div className="about_intro" data-aos="fade-in" data-aos-duration="750">
                <div className="image_container">
                    <img src={founders} alt="" />
                </div>
                <p>RR Livin's founders are Ryan and Rachel Dawson. The two met during their respective careers as real estate agents in the Texas hill country. </p>
                <p>In 2009, the couple decided to offer a new approach to buying/renting homes in founding RR Livin'. Utilizing their experiences, they were able create a more streamlined process for potential homeowners seeking help in making their dreams come true.</p>
            </div>
            <h1 className="livin_difference">The RR Livin' Difference</h1>
            <div className="tech_difference" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                <h4>Tech</h4>
                <div className="image_container">
                    <img src={tech} alt="" />
                </div>
                <p>RR Livin' leverages the latest data to help you find the right home at the right price. Clients can get personalized listings sent to them immediately or view the current listings posted on the site. </p>
                <p>Homeowners seeking our help in listing their homes can utilize our platform to present their homes to our clients looking to purchase. This ecosystem of buyers and sellers has helped sell/rent over 200 Texas homes in the last year!</p>
                <div className="tech_links">
                    <button>Get Personalized Listings</button>
                    <Link to="/Houses"><button>Current House Listings</button></Link>
                    <Link to="/Apartment"><button>Current Apartment Listings</button></Link>
                </div>
            </div>
            <div className="agents_difference" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                <h4 style={{marginTop:"80px"}}>Agents</h4>
                <div className="image_container">
                    <img src={agents} alt="" />
                </div>
                <p>RR Livin's agents are the best in the game. Our agents will find you exactly what you are looking for and communicate with you every step of the way.</p>
                <p>In combination with our tech, our agents will either get you into a home or sell your home at the right price. With our ecosystem of buyers and sellers, many deals have been made to satisfy both parties. </p>
                <button>Contact a Local Agent</button>
            </div>
            
        </div>
    )
}
