import React from "react";
import '../../css/Weather.css'
import {getIcon} from './iconsMap'


function openLink(link) {
    window.open(link)
}


export default function Weather({data}) {


    return (
        <div className={'weatherContainers'} onClick={() => {
            openLink("https://www.bensweather.com/")
        }}>
            {getIcon(data.weather[0].icon, 25)}
            <h2 style={{display: 'inline'}}>{data.main.temp} ℉</h2>
        </div>
    )
}