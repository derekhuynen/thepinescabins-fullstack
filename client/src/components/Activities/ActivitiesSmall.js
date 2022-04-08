import React from "react";

function openLink(link) {
    window.open(link)
}

export default function ActivitiesSmall({info}) {
    return (
        <div className="location-info" >
            <div className={"image"}>
                <img src={info.image1} alt={info.title}/>
            </div>

            <div className={"locationInfo_Bottom"} onClick={() => {
                openLink(info.link)
            }}>
                <h2>{info.title}</h2>
                <h4>{info.number}</h4>
            </div>
        </div>
    )
}