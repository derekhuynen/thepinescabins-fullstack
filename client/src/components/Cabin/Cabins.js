import '../../css/Test.css';
import React, {useEffect, useState} from "react";
import Map from '../Map'
import {cabins} from '../../JSON/cabins.js'
import {Icon} from "@iconify/react";
import starFilled from "@iconify/icons-ant-design/star-filled";

import 'react-dropdown/style.css';
import axios from "axios";
import { useHistory } from "react-router-dom";


function trimString(str) {
    if (str.length > 350) {
        return str.substring(0, str.indexOf(" ", 350)) + "...";
    } else {
        return str
    }
}

function items2(amenities) {
    return (
        <div className={"amenities"}>
            {amenities.map((amenity, index) => {
                return (
                    <div key={index} id={index} className={"amenity"}>
                        <h4>{amenity}</h4>
                    </div>
                )
            })}
        </div>
    )
}


const center = {
    lat: 34.24651450381265,
    lng: -116.86896456863401
}

export default function Cabins() {
    const [cabinList, setCabinList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(process.env.BASE_URL + "/cabin")
            .then(res => {
                console.log(res.data.item);
                setCabinList(res.data.item)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    const displayCabins = cabinList.map((cabin, index) => {
        return (
            <div key={index} className={'cabin'} onClick={() => history.push(`/cabin/${cabin._id}`)}>

                <div className={"cabinImage"}>
                    <img src={`https://wpines.s3.us-west-1.amazonaws.com/${cabin.photos[0]}`} alt={cabin.cabinName}/>
                </div>

                <div className={'cabinInfo'}>
                    <div className={'cabinTop'}>
                        <h2>{cabin.cabinName}</h2>

                        {cabin.rating ?
                            <div className={'houseRating'}>
                                <Icon icon={starFilled} color="#e61e4d" width="18" height="18" inline={true}/>
                                <h5 className={"gray"}>({cabin.rating.overallCount} reviews)</h5>
                                <h5>{cabin.rating.overallRating}</h5>
                            </div>
                            : ""
                        }
                    </div>
                    <div className={'cabinBedInfo'}>
                        <h4><span>Guests: {cabin.guests}</span></h4>
                        <h4><span>Bedrooms: {cabin.bedrooms}</span></h4>
                        <h4><span>Beds: {cabin.beds}</span></h4>
                        <h4><span>Bathrooms: {cabin.bathrooms}</span></h4>
                    </div>

                    {items2(cabin.amenities)}
                    <div className={"houseDescription"}>
                        <p>{trimString(cabin.description)}</p>
                    </div>
                    <h4 className={"license"}>License: {cabin.license}</h4>
                </div>
            </div>
        )
    })
    return cabinList ? (

        <div className={'container'}>
            <div className={'left'}>
                {displayCabins}
            </div>
            <div className={'right'}>
                <Map center={center} items={cabins} comp={"cabin"}/>
            </div>
        </div>

    ) : ("Loading");
}