import React, {useState, useEffect} from 'react'

//Data
import {HousesData} from '../data/HousesData'

//Component
import PropertyModal from './PropertyModal'


export default function Houses() {
    //Property Modal for when User Clicks on Property for More Info
    const [modalOpen, setModalOpen] = useState(false)
    const [featuredProperty, setFeaturedProperty] = useState(HousesData[0])

    const handleModalToggle = (propertyIndex) => {
        setModalOpen(!modalOpen)
        if (modalOpen){
            document.querySelector("body").classList.remove("modal_open")
        } else {
            document.querySelector("body").classList.add("modal_open")
        }
        if (propertyIndex !== "back"){
            setFeaturedProperty(housesArray[propertyIndex])
        }
    }

    //Handling When Users CLicks for More Filter Options
    const [moreFilters, setMoreFilters] = useState(["", "", "", ""])
    const [bedEmpty, setBedEmpty] = useState(true)
    const [bathEmpty, setBathEmpty] = useState(true)

    //User submits added filters
    const handleMoreFilters = (event) => {
        event.preventDefault()

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

    //User Wants to Clear Added Filters
    const handleClearFilters = (message) => {
        setBedEmpty(true)
        setBathEmpty(true)

        const moreFilterInputs = Array.from(document.querySelectorAll(".more_popup input")).slice(0, 4)

        moreFilterInputs.forEach(input => {
            input.value = ""
        })

        setMoreFilters(["", "", "", ""])
    }


    const [housesArray, setHousesArray] = useState( HousesData)

    const handleApplyFilter = () => {
        let filteredArray = []
        let originalArray = [...HousesData]
    
        //City Filter
        const citySelect = document.querySelectorAll(".filter_container select")[0]
        if (citySelect.value !== 'All'){
            filteredArray = originalArray.filter(house => house.location === citySelect.value)
        } else {
            filteredArray = originalArray
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
    
    useEffect(() => {
        let handler = (event) => {
            if (!node.current.contains(event.target) && moreOpen && event.target.className !== "more" && event.target.id !== "add") {
                setMoreOpen(!moreOpen)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    },[moreOpen])

    const node = React.useRef()

    return (
        <div className="full_page">
            <PropertyModal 
            modalOpen={modalOpen}
            featuredProperty={featuredProperty}
            handleModalToggle={handleModalToggle}
            />
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
                        <input id="bedroom_min" type="text" autoComplete="off" placeholder="Min"/> 
                        <input id="bedroom_max" type="text" autoComplete="off" placeholder="Max"/> 
                        <h4>Bathrooms:</h4>
                        <input id="bathroom_min" type="text" autoComplete="off" placeholder="Min"/> 
                        <input id="bathroom_max" type="text" autoComplete="off" placeholder="Max"/>
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
            <h1 className="headline">Houses ({housesArray.length})</h1>
            <div className="home_container">
                {housesArray.length !== 0 ?
                    housesArray.map((house, index) => {
                    return (
                        <div className="property" key={index} onClick={() => handleModalToggle(index)}>
                            <div className="image_container">
                                <img src={house.images[0]} alt="" />
                            </div>
                            <div className="property_stats">
                                <h4>
                                ${house.price.toLocaleString()}
                                </h4>
                                <p>{house.bedrooms} Bed, {house.bathrooms} Bath</p>
                                <p>{house.address}, {house.location}, Texas</p>
                            </div>
                        </div>
                    ) 
                }) : <h2 className="no_results">Sorry, No Results Match the Applied Filters</h2>}
            </div>
        </div>
    )
}
