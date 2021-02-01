import React, {useState} from 'react'
import {Link} from 'react-router-dom'
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
            <div className="property_container">
                <div className="property_nav">
                    <img src={logo} alt="" />
                    <span onClick={handleBack}>🡸 BACK</span>
                </div>
                <div className="property_info_images_container">
                    <div className="property_images">
                        <div className="property_flex">
                            {props.featuredProperty.images.map((image, index) => {
                                return(
                                    <img src={image} alt="" key={index} onClick={() => handleImageModalToggle(index)}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="property_info">
                        <h1>${props.featuredProperty.price} <h3>{props.featuredProperty.bedrooms} Bed <span>│</span> {props.featuredProperty.bathrooms} Bath</h3></h1>
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
