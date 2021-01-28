import React, {useState} from 'react'
import {Link} from 'react-router-dom'
//components
import useCurrentWidth from './useCurrentWidth'
//images
import logo from '../images/logo.JPG'

export default function Nav(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(useCurrentWidth() <= 650 ? true : false)

    const handleResize = (width, isMobile) =>{
        if (width > 650 && isMobile === true){
            setIsMobile(false)
            setMenuOpen(false)
        } else if (width <= 650 && isMobile === false){
            setIsMobile(true)
            setMenuOpen(false)
        }
    }

    handleResize(useCurrentWidth(), isMobile)

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div>
            {isMobile ? 
            <div>    
            <div className="nav">
                <div className="logo_container">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="menu_button" onClick={handleMenuToggle}>
                    <span className={menuOpen ? "hamburger open" : "hamburger"}></span>
                </div>
            </div> 
            <div className={menuOpen ?"links_container open" : "links_container"}>
                <Link to="/About">ABOUT</Link>
                <Link to="/Houses">HOUSES</Link>
                <Link to="/Apartments">APARTMENTS</Link>
            </div> 
            </div>
            :
            <div className="nav">
                <div className="logo_container">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className={menuOpen ?"links_container open" : "links_container"}>
                    <Link to="/About">ABOUT</Link>
                    <Link to="/Houses">HOUSES</Link>
                    <Link to="/Apartments">APARTMENTS</Link>
                </div> 
            </div>}
        </div>
    )
}
