import svgIcons from '../../JSON/svgIcons.js';
import React from "react";


import {IoSunnyOutline,IoPartlySunnyOutline,IoCloudyOutline,IoRainyOutline} from "react-icons/io5";
import {BsCloudLightningRain,BsCloudSnow,BsCloudy,BsMoonStars,BsCloudFog,BsCloudMoon} from "react-icons/bs";


export const getIcon = (name,size) => {

    const iconsMap =  {
        '01d': <IoSunnyOutline style={{fontSize: size}}/>,
        '02d': <IoPartlySunnyOutline style={{fontSize: size}}/>,
        '03d': <IoCloudyOutline style={{fontSize: size}} />,
        '04d': <IoCloudyOutline style={{fontSize: size}} />,
        '09d': <IoRainyOutline style={{fontSize: size}} />,
        '10d': <IoRainyOutline style={{fontSize: size}} />,
        '11d': <BsCloudLightningRain style={{fontSize: size}} />,
        '13d': <BsCloudSnow style={{fontSize: size}} />,
        '50d': <BsCloudFog style={{fontSize: size}} />,
        '01n': <BsMoonStars style={{fontSize: size}} />,
        '02n': <BsCloudMoon style={{fontSize: size}} />,
        '03n': <BsCloudy style={{fontSize: size}} />,
        '04n': <BsCloudy style={{fontSize: size}} />,
        '09n': <IoRainyOutline style={{fontSize: size}} />,
        '10n': <IoRainyOutline style={{fontSize: size}} />,
        '11n': <BsCloudLightningRain style={{fontSize: size}} />,
        '13n': <BsCloudSnow style={{fontSize: size}} />,
        '50n': <BsCloudFog style={{fontSize: size}} />,
    };


    if (iconsMap[name]) {
        return iconsMap[name];
    }
    return svgIcons.sunny;
};