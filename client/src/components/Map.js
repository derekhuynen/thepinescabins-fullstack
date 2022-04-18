import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import '../css/Map.css'
import CabinSmall from './Cabin/CabinSmall.js'
import RestaurantSmall from "./Restaurant/RestaurantSmall.js";
import ActivitiesSmall from './Activities/ActivitiesSmall.js'
import {MdLocationPin} from "react-icons/md";


const LocationInfoBox = ({info, comp}) => {
    if (comp === "cabin") {
        return <CabinSmall info={info}/>
    } else if (comp === "restaurant") {
        return <RestaurantSmall info={info}/>
    } else if (comp === "activities") {
        return <ActivitiesSmall info={info}/>
    } else {
        return "";
    }

}


const AnyReactComponent = ({onClick}) => {
    return (
        <div className={'marker'} onClick={onClick}>
            <MdLocationPin className={"icon"} style={{color: "red", width: "25", height: "25"}} />
        </div>
    )
}


const Map = ({center, zoom, items, comp}) => {
    const [locationInfo, setLocationInfo] = useState(items[0])

    const markers = items.map((item, index) => {
        return (
            <AnyReactComponent
                key={index}
                lat={item.coordinates.latitude}
                lng={item.coordinates.longitude}
                text="My Marker"
                onClick={(e) => {
                    setLocationInfo(item)
                    console.log(e)
                }}
            />
        )
    });

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={ev => {
                    setLocationInfo(null)
                    console.log(ev)
                }}
            >
                {markers}
                {locationInfo &&
                <LocationInfoBox lat={locationInfo.coordinates.latitude} lng={locationInfo.coordinates.longitude}
                                 info={locationInfo} comp={comp}/>}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 34.238815,
        lng: -116.88877
    },
    zoom: 15
}

export default Map