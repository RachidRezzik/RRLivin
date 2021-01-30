import React, {useState} from 'react'
//Data
import {HousesData} from '../data/HousesData'


export default function Houses() {
    const [housesArray, setHousesArray] = useState(HousesData)
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
                <div>
                    <button>More Options</button>
                </div>
                <div>
                    <button id="apply">Apply Filters</button>
                </div>
            </div>
            <h1 className="headline">Houses</h1>
            <div className="home_container">
                {housesArray.map(house => {
                    return (
                        <div className="property">
                            <div className="image_container">
                                <img src={house.images[0]} alt="" />
                            </div>
                            <div className="property_stats">
                                <h4>${house.price.toLocaleString()}</h4>
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
