import React, {useEffect, useState} from 'react';
import '../../css/Home.css';
import Banner from '../Nav/Banner.js'
import HouseCard from './HouseCard.js'
import Card from './Card.js'

import House from '../../CabinPhotos/Cabins/GoldRushSmall.JPG'
import Hiking from '../../CabinPhotos/City720/Hiking.JPG'
import Village from '../../CabinPhotos/City720/Village.JPG'

import {BsHouseDoorFill} from "react-icons/bs";
import {MdHiking,MdRestaurant} from "react-icons/md";


function Home() {
    const [cabinList, setCabinList] = useState([])

    useEffect(() => {
        fetch( "/api/cabin")
            .then(res =>
                res.json()
            ).then(data => {
            setCabinList(data.item)
        })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const items = cabinList.map((cabin,index) => {
        return(
            <HouseCard cabin={cabin} key={index}/>
        )
    })

    return (
        <div className='home'>
            <Banner/>

            <div className='home__section'>
                <Card
                    image1={House}
                    title="All Cabins"
                    link= "/cabins"
                    icon={<BsHouseDoorFill/>}
                />
                <Card
                    image1= {Hiking}
                    title="Things To Do"
                    link= "/activities"
                    icon={<MdHiking/>}
                />
                <Card
                    image1={Village}
                    title="Restaurants"
                    link= "/restaurants"
                    icon={<MdRestaurant/>}
                />
            </div>
            {cabinList ?
            <div className='home__section'>
                {items}
            </div>
                : "Loading"}
        </div>
    )
}

export default Home