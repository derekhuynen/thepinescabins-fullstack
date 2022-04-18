import React from 'react'
import '../../css/OctoberFest.css'
import bannerPic from '../../CabinPhotos/BigBearBanner/Octoberfest Banner.png'
import {useHistory} from "react-router-dom";


export default function OctoberFest(){
    const history = useHistory();
    return (

        <div className={"octoberFest-banner"} onClick={()=> history.push('/holiday')}>
            <div className={"octoberFest-center"}>
                <img src={bannerPic} alt={"OktoberFest in Big Bear 2021"} />
            </div>
            <h2>Click For More Info</h2>
        </div>
    )
}