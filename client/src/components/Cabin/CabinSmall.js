import {Icon} from "@iconify/react";
import starFilled from "@iconify/icons-ant-design/star-filled";
import React from "react";


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
                    <Icon icon={starFilled} color="#e61e4d" width="15" height="15" inline={true}/>
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