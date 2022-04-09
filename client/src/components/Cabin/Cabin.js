import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import starFilled from "@iconify/icons-ant-design/star-filled";
import axios from "axios";
import {Icon} from "@iconify/react";
import photo from '../../CabinPhotos/Cabins/HolidaySmall.jpeg'
import '../../css/Cabin.css'


export default function Cabin() {
    const [cabin, setCabin] = useState(null);
    const [show, setShow] = useState(false);

    let params = useParams();

    useEffect(() => {
        axios.get("http://localhost:3001/api/cabin/" + params.id)
            .then(res => {
                console.log(res.data);
                setCabin(res.data.item)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [params.id])

    return cabin ? (
        <div className={"cabin-container"}>

            <div className={"cabin-photo"}>
                <img src={`https://wpines.s3.us-west-1.amazonaws.com/${cabin.photos[0]}`} alt="img"/>
            </div>

            <div className={"cabin-info-container"}>


                <h1 className={"cabin-header"}>Cabin: {cabin.cabinName}</h1>


                <div className={"cabin-info"}>
                    <span>
                        <Icon icon={starFilled} color="#e61e4d" width="15" height="15" inline={true}/>
                        {cabin.rating.overallRating} - {cabin.rating.overallCount} reviews
                    </span>
                </div>

                <div className={"cabin-info"}>
                    <div className={"cabin-description"}>
                        <span>
                            {
                                `${cabin.guests} guests - ${cabin.bedrooms} bedrooms - ` +
                                `${cabin.beds} beds - ${cabin.bathrooms} baths`
                            }
                        </span>
                    </div>
                </div>

                <div className={"cabin-info"}>
                    <div className={"cabin-description"}>
                        {cabin.description}
                        {show}

                        <div className={"cabin-show-more"} onClick={()=>setShow(true)}>
                            <span>Show More ></span>
                        </div>
                    </div>
                </div>

                <div className={"cabin-map"}>

                </div>
            </div>



            <div className={"cabin-show-all-info"} hidden={!show} onClick={()=> setShow(false)}>
                Hello
            </div>
        </div>
    ) : (
        <h1>Loading</h1>
    )
}