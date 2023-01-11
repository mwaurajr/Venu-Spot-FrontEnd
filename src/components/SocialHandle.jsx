import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons"

function SocialHandle() {
    return (
        <div className="social-container bg-gray fixed space-x-8 right-5 mr-16 flex items-center justify-between">
            <a href="#" className="youtube social ">
                <FontAwesomeIcon icon={faYoutube} color="black" />
            </a>
            <a href="#"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} color="black" />
            </a>
            <a href="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} color="black" />
            </a>
            <a href="#"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} color="black" />
            </a>
        </div>
    )
}

export default SocialHandle