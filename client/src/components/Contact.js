import '../css/Test2.css';
import React from "react";
import Email from "../CabinPhotos/Email.png"
import Phone from "../CabinPhotos/Phone.png"


export default function Contact() {

    return (
        <div className='outerContainer'>
            <div className={"bottomSection"}>
            <div className={"bottomCenter"}>
                <div className={"infoBox"}>
                    <div className={"infoBoxUpper"}>
                        <img src={Email} alt={"Email Logo"}/>
                    </div>
                    <div className={"infoBoxLower"}>
                        <h3>info@thepinescabins.com</h3>
                    </div>
                </div>


                <div className={"infoBox"}>
                    <div className={"infoBoxUpper"}>
                        <img src={Phone} alt={"Phone Logo"}/>
                    </div>
                    <div className={"infoBoxLower"}>
                        <h3>(714) 333-6783</h3>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}