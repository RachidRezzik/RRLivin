import React, {useState, useRef, useEffect} from 'react'
import { SliderData } from '../data/SliderData'
//images
import down_arrow from '../images/arrowDown.png'


export default function Hero() {
    const [current, setCurrent] = useState(0)
    const length = SliderData.length
    console.log(length, SliderData)
    const timeout = useRef(null)
    
    
    useEffect(() => {
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
        timeout.current = setTimeout(handleNextSlide, 3500)
    }

    return (
        <div className="hero_section">
            <div className="slide_container">
                {SliderData.map((slide, index) => {        
                    return current === index ? 
                        <div className="slide" key={index} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.img})`}}>
                            <h1>{slide.title}</h1>
                            <p>{slide.price}</p>
                            <button onMouseEnter={handleViewHomeEnter} onMouseLeave={handleViewHomeLeave}>View Home ➜</button>
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
