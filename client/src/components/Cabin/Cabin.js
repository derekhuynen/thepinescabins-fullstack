import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import '../../css/Cabin.css'
import Calender from "../Calendar/Calender.js";
import {BsStarFill} from "react-icons/bs";


export default function Cabin() {
    const [cabin, setCabin] = useState(null);
    const [show, setShow] = useState(false);

    let params = useParams();

    useEffect(() => {
        fetch("/api/cabin/" + params.id)
            .then(res =>
               res.json()
            ).then(data =>{
            setCabin(data.item)
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
                        <BsStarFill/>
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
                <div className={"cabin-calendar"}>
                    <Calender boxSize={50} fontSize={20}/>
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