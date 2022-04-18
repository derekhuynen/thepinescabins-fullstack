import React from "react";
import {BsStarFill} from "react-icons/bs";


function openLink(link) {
    window.open(link)
}

export default function CabinSmall({info}) {
    return (
        <div className="location-info" >
            <div className={"image"}>
                <img src={info.image1} alt={info.title}/>
            </div>

            <div className={"locationInfo_Bottom"} onClick={() => {
                openLink(info.link)
            }}>
                <h2>{info.title}</h2>
                <div className={'rating'}>
                    <BsStarFill style={{color: "#e61e4d", fontSize: 14}}/>
                    <h5>{info.rating}</h5>
                </div>
                <div className={"locationInfo_guest"}>
                    <h4><span>Guests: {info.guests}</span></h4>
                    <h4><span>Bedrooms: {info.bedrooms}</span></h4>
                </div>
            </div>
        </div>
    )
}