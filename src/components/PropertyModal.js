import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
//Component
import useCurrentWidth from './useCurrentWidth' 
//images
import logo from '../images/logo.JPG'
import ImagesModal from './ImagesModal'

export default function PropertyModal(props) {
    const [moreDetails, setMoreDetails] = useState("overview")

    const handleMoreDetails = (details) => {
        setMoreDetails(details)
    }

    const handleBack = () => {
        props.handleModalToggle("back")
        setMoreDetails("overview")
    }

    const handleContact = () => {
        props.handleModalToggle("back")
        window.scrollTo({
            top: 0
        })
    }

    //Image Modal When User Clicks Image
    const [imageModalOpen, setImageModalOpen] = useState(false)
    const [featuredIndex, setFeaturedIndex] = useState("")

    const handleImageModalToggle = (imageIndex) => {
        setImageModalOpen(!imageModalOpen)
        setFeaturedIndex(imageIndex)
    }

    const handlePreviousImage = () => {
        if (featuredIndex !== 0){
            setFeaturedIndex(featuredIndex - 1)
        } else {
            setFeaturedIndex(props.featuredProperty.images.length - 1)
        }
    }

    const handleNextImage = () => {
        if (featuredIndex !== props.featuredProperty.images.length - 1){
            setFeaturedIndex(featuredIndex + 1)
        } else {
            setFeaturedIndex(0)
        }
    }

    useEffect(() => {
        let handler = (event) => {
            if (!node.current.contains(event.target) && props.modalOpen && !document.querySelector(".image_modal").contains(event.target)) {
                handleBack()
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    const node = React.useRef()

    return (
        <div className={props.modalOpen ? "property_modal open" : "property_modal"}>
            <ImagesModal  
            imageModalOpen={imageModalOpen}
            featuredIndex={featuredIndex}
            featuredImages={props.featuredProperty.images}
            handleImageModalToggle={handleImageModalToggle}
            handleNextImage={handleNextImage}
            handlePreviousImage={handlePreviousImage}    
            />
            <div ref={node} className="property_container">
                <div className="property_nav">
                    <img src={logo} alt="" />
                    <span onClick={handleBack}>🡸 BACK</span>
                </div>
                <div className="property_major_flex">
                    {useCurrentWidth() < 800 ? 
                    <div className="property_images">
                        <div className="property_flex">
                            {props.featuredProperty.images.map((image, index) => {
                                return(
                                    <img src={image} alt="" key={index} onClick={() => handleImageModalToggle(index)}/>
                                )
                            })}
                        </div>
                    </div>
                    :
                    <div className="property_images2">
                        <div className="property_flex2">
                            {props.featuredProperty.images.map((image, index) => {
                                return(
                                    <img src={image} alt="" key={index} onClick={() => handleImageModalToggle(index)}/>
                                )
                            })}
                        </div>
                    </div>
                    }
                    <div className="property_info">
                        <h1>${window.location.href.includes('Houses') ? props.featuredProperty.price.toLocaleString(): `${props.featuredProperty.price}/Month`} <span>{props.featuredProperty.bedrooms} Bed <span>│</span> {props.featuredProperty.bathrooms} Bath</span></h1>
                        <h3>{props.featuredProperty.address}, {props.featuredProperty.location}, Texas</h3>
                        <Link to="/Contact"><button onClick={handleContact}>Contact Agent</button></Link>
                        <div className="more_details_header">
                            <button className={moreDetails === "overview" ? "active" : ""} onClick={() => handleMoreDetails("overview")}>Overview</button>
                            <button className={moreDetails === "features" ? "active" : ""} onClick={() => handleMoreDetails("features")}>Features</button>
                        </div>
                        <div className="more_details">
                            {moreDetails === "overview" ? 
                            <p>Tucked away in the quiet Crestview community, is a charming 2 bedroom, 2 bathroom condo on manicured grounds, within a private and secure complex. As a resident, you will have access to a pool, gazebo, hot tub, garden, and outdoor grill facilities in a secluded courtyard. </p>
                            
                            : 
                            <div className="features_flex">
                                <span><span className="feature">Build Year:</span>  {props.featuredProperty.year}</span>
                                <span><span className="feature">Parking:</span>  {props.featuredProperty.parking}</span>
                                <span><span className="feature">Heating:</span>  {props.featuredProperty.heating}</span>
                                <span><span className="feature">Cooling:</span>  {props.featuredProperty.cooling}</span>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
