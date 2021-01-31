import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
//Data
import { SliderData } from '../data/SliderData'
//images
import down_arrow from '../images/arrowDown.png'


export default function Hero() {
    const [current, setCurrent] = useState(0)
    const length = SliderData.length
    console.log(length, SliderData)
    const timeout = useRef(null)
    
    
    useEffect(() => {

        AOS.init()

        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3500)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
        
    }, [current,length])

    const handleNextSlide = () => {
        setCurrent(current === (length -1) ? 0 : current + 1)
    }

    const handlePreviousSlide = () => {
        setCurrent(current === 0 ? (length -1)  : current - 1)
    }

    const handleViewHomeEnter = () => {
        clearTimeout(timeout.current)
    }

    const handleViewHomeLeave = () => {
        timeout.current = setTimeout(handleNextSlide, 4000)
    }

    const handleLinkClick = () => {
        window.scrollTo({
            top: 0
        })
    }

    return (
        <div className="hero_section">
            <div className="slide_container">
                {SliderData.map((slide, index) => {        
                    return current === index ? 
                        <div className="slide" key={index} data-aos="fade" duration="1750" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.img})`}}>
                            <h1 data-aos="new-animation" >{slide.title}</h1>
                            <p data-aos="new-animation">{slide.price}</p>
                            {slide.title.includes('House') ?
                            <Link onClick={handleLinkClick} to='/Houses'>
                                <button onMouseEnter={handleViewHomeEnter} onMouseLeave={handleViewHomeLeave}>View Houses ➜</button>
                            </Link> : 
                            <Link onClick={handleLinkClick} to='/Apartments'>
                                <button onMouseEnter={handleViewHomeEnter} onMouseLeave={handleViewHomeLeave}>View Apartments ➜</button>
                            </Link>}
                            <div className="slide_buttons">
                                <span id="previous" onClick={handlePreviousSlide}>➜</span>
                                <span onClick={handleNextSlide}>➜</span>
                            </div>
                            <img src={down_arrow} alt="" />
                        </div>
                        : ""   
                })}
            </div>
        </div>
    )
}
