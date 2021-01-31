import React, { useState, useEffect, useRef } from 'react'
//Data
import {ApartmentsData} from '../data/ApartmentsData'

export default function Houses() {
    const [apartmentsArray, setApartmentsArray] = useState(ApartmentsData)

    const handleApplyFilter = () => {
        let filteredArray = []
        const citySelect = document.querySelectorAll(".filter_container select")[0]
        console.log(citySelect.value)
        if (citySelect.value !== 'All'){
            filteredArray = ApartmentsData.filter(house => house.location === citySelect.value)
        } else {
            filteredArray = ApartmentsData
        }
        
        const priceSelect = document.querySelectorAll(".filter_container select")[1]
        if (priceSelect.value === "Low to High") {
            filteredArray = filteredArray.slice(0).sort((a,b) => a.price - b.price)
        } else if (priceSelect.value === "High to Low") {
            filteredArray = filteredArray.slice(0).sort((a,b) => b.price - a.price)
        }
        
        setApartmentsArray(filteredArray)
    }

    const [moreOpen, setMoreOpen] = useState(false)

    const handleMoreClick = () => {
        setMoreOpen(!moreOpen)
    }

    useEffect(() => {
        let handler = (event) => {
            if (!node.current.contains(event.target) && moreOpen && event.target.className !== "more") {
                handleMoreClick()
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    },)

    const node = React.useRef()

    return (
        <div className="full_page">
            <div className="filter_container">
                <div>
                    City:  
                    <select>
                        <option>All</option>
                        <option>Austin</option>
                        <option>Dallas</option>
                        <option>Houston</option>
                        <option>San Antonio</option>
                    </select>
                </div>
                <div>
                    Price:  
                    <select>
                        <option>Any</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                    </select>                   
                </div>
                <div className="rel_div">
                    <button className="more" onClick={handleMoreClick}>More
                    </button>
                    <div ref={node} className={moreOpen ? "more_popup open" : "more_popup"}>
                        <h4>Bedrooms:</h4>
                        <input type="text" placeholder="Min"/> 
                        <input type="text" placeholder="Max"/> 
                        <h4>Bathrooms:</h4>
                        <input type="text" placeholder="Min"/> 
                        <input type="text" placeholder="Max"/>
                        <div className="popup_buttons">
                            <button>Save</button>         
                            <button>Clear</button>         
                        </div> 
                    </div>
                </div>
                <div>
                    <button id="apply" onClick={handleApplyFilter}>Apply Filters</button>
                </div>
            </div>
            <h1 className="headline">Apartments</h1>
            <div className="home_container">
                {apartmentsArray.map((house, index) => {
                    return (
                        <div className="property" key={index}>
                            <div className="image_container">
                                <img src={house.images[0]} alt="" />
                            </div>
                            <div className="property_stats">
                                <h4>${house.price.toLocaleString()}/Month</h4>
                                <p>{house.bedrooms} Bedrooms</p>
                                <p>{house.location}, Texas</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
