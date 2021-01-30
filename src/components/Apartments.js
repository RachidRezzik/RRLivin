import React from 'react'

export default function Houses() {
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
            <h1 className="headline">Apartments</h1>
            <div className="home_container">
                
            </div>
        </div>
    )
}
