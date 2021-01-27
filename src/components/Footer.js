import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <div className="footer_left2">
                    <h3>Find Your Perfect Place</h3>
                    <div className="social_media">
                        <i className="fab fa-twitter fa-2x"></i>                
                        <i className="fab fa-facebook fa-2x"></i>                  
                        <i className="fab fa-instagram fa-2x"></i>
                        <i className="fab fa-github fa-2x"></i>                      
                    </div>
                </div>
            </div>
            <div className="footer_right">
                <Link to="/Apartments">APARTMENTS</Link>
                <Link to="/Houses">HOUSES</Link>
            </div>
        </div>
    )
}
