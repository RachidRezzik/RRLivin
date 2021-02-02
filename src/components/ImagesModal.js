import React, {useEffect} from 'react'
//images
import x_mark from '../images/x_mark.png'

export default function ImagesModal(props) {
    const handleCloseImage = () => {
        props.handleImageModalToggle()
    }

    const handleNextImage = (direction) => {
        if (direction === "previous"){
            props.handlePreviousImage()
        } else {
            props.handleNextImage()
        }
    }

    useEffect(() => {
        let handler = (event) => {
            if (!node.current.contains(event.target) && props.imageModalOpen && event.target.className !== "exit_modal") {
                handleCloseImage()
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    const node = React.useRef()

    return (
        <div className={props.imageModalOpen ? "image_modal open": "image_modal"}>
            <div ref={node} className="image_container">
                <img src={props.featuredImages[props.featuredIndex]} alt="" />
                <div className="slide_buttons">
                    <span id="previous" onClick={() => handleNextImage("previous")}>➜</span>
                    <span onClick={() => handleNextImage("next")}>➜</span>
                </div>
            </div>
            <img className={props.imageModalOpen ? "exit_modal open" : "exit_modal"} src={x_mark} onClick={handleCloseImage} alt=""/>
        </div>
    )
}
