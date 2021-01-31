import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from 'react-router-dom' 

//Data
import {HousesData} from '../data/HousesData'
import {ApartmentsData} from '../data/ApartmentsData'


export default function Houses() {
    const [moreFilters, setMoreFilters] = useState(["", "", "", ""])
    const [bedEmpty, setBedEmpty] = useState(true)
    const [bathEmpty, setBathEmpty] = useState(true)

    const handleMoreFilters = () => {
        const moreFilterInputs = Array.from(document.querySelectorAll(".more_popup input")).slice(0, 4)

        const filterValues = []
        moreFilterInputs.forEach(input => {
            filterValues.push(input.value)
        })

        setMoreFilters(filterValues)

        let filters = [...filterValues]
        let filters2 = [...filters]
        setBedEmpty(filters.splice(0,2).every(filter => filter === ""))
        setBathEmpty(filters2.splice(2, 2).every(filter => filter === ""))
    }

    const handleClearFilters = () => {
        const moreFilterInputs = Array.from(document.querySelectorAll(".more_popup input")).slice(0, 4)

        moreFilterInputs.forEach(input => {
            input.value = ""
        })

        setMoreFilters(["", "", "", ""])
    }


    const [housesArray, setHousesArray] = useState(window.location.href.includes("Houses") ? HousesData: ApartmentsData)

    const handleApplyFilter = () => {
        let filteredArray = []

        //City Filter
        const citySelect = document.querySelectorAll(".filter_container select")[0]
        if (citySelect.value !== 'All'){
            filteredArray = HousesData.filter(house => house.location === citySelect.value)
        } else {
            filteredArray = HousesData
        }
        
        //Price Filter
        const priceSelect = document.querySelectorAll(".filter_container select")[1]
        if (priceSelect.value === "Low to High") {
            filteredArray = filteredArray.slice(0).sort((a,b) => a.price - b.price)
        } else if (priceSelect.value === "High to Low") {
            filteredArray = filteredArray.slice(0).sort((a,b) => b.price - a.price)
        }
        
        //Bedroom Filter
        if (!bedEmpty && moreFilters[0] !== ""){
            filteredArray = filteredArray.filter(house => house.bedrooms >= Number(moreFilters[0]))
        } 
        if (!bedEmpty && moreFilters[1] !== ""){
            filteredArray = filteredArray.filter(house => house.bedrooms <= Number(moreFilters[1]))
        }

        //Bathroom Filter
        if (!bathEmpty && moreFilters[2] !== ""){
            filteredArray = filteredArray.filter(house => house.bathrooms >= Number(moreFilters[2]))
        } 
        if (!bathEmpty && moreFilters[3] !== ""){
            filteredArray = filteredArray.filter(house => house.bathrooms <= Number(moreFilters[3]))
        }

        setHousesArray(filteredArray)
    }

    const [moreOpen, setMoreOpen] = useState(false)

    const handleMoreClick = () => {
        setMoreOpen(!moreOpen)
    }

    const history = useHistory() 

    useEffect(() => {
        history.listen((location) => { 
            if(location.pathname.includes('Houses')){
                setHousesArray(HousesData)
            } else if (location.pathname.includes('Apartments')){
                setHousesArray(ApartmentsData)
            }
        }) 
        let handler = (event) => {
            if (!node.current.contains(event.target) && moreOpen && event.target.className !== "more" && event.target.id !== "add") {
                handleMoreClick()
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    },[history])

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
                    <button className="more" onClick={handleMoreClick}>More{bathEmpty && bedEmpty ? "": !bathEmpty && !bedEmpty ? ": 2" : ": 1"}
                    </button>
                    <form onSubmit={handleMoreFilters} ref={node} className={moreOpen ? "more_popup open" : "more_popup"}>
                        <h4>Bedrooms:</h4>
                        <input id="bedroom_min" type="text" placeholder="Min"/> 
                        <input id="bedroom_max" type="text" placeholder="Max"/> 
                        <h4>Bathrooms:</h4>
                        <input id="bathroom_min" type="text" placeholder="Min"/> 
                        <input id="bathroom_max" type="text" placeholder="Max"/>
                        <div className="popup_buttons">
                            <input onClick={handleMoreClick} id="add" type="submit" value="Add"/>
                            <button id="clear" onClick={handleClearFilters}>Clear</button>         
                        </div> 
                    </form>
                </div>
                <div>
                    <button id="apply" onClick={handleApplyFilter}>Apply Filters</button>
                </div>
            </div>
            <h1 className="headline">Houses</h1>
            <div className="home_container">
                {housesArray.map((house, index) => {
                    return (
                        <div className="property" key={index}>
                            <div className="image_container">
                                <img src={house.images[0]} alt="" />
                            </div>
                            <div className="property_stats">
                                <h4>${house.price.toLocaleString()}</h4>
                                <p>{house.bedrooms} Bedrooms, {house.bathrooms} Bathrooms</p>
                                <p>{house.location}, Texas</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
