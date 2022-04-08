import svgIcons from '../../JSON/svgIcons';
import { Icon } from '@iconify/react';
import sunnyOutline from '@iconify/icons-ion/sunny-outline';
import partlySunnyOutline from '@iconify/icons-ion/partly-sunny-outline';
import cloudIcon from '@iconify/icons-bi/cloud';
import cloudDrizzle from '@iconify/icons-bi/cloud-drizzle';
import weatherRainShowersDay48Regular from '@iconify/icons-fluent/weather-rain-showers-day-48-regular';
import cloudLightningRain from '@iconify/icons-bi/cloud-lightning-rain';
import cloudSnow from '@iconify/icons-bi/cloud-snow';
import cloudFog from '@iconify/icons-bi/cloud-fog';

import moonIcon from '@iconify/icons-bi/moon';
import cloudMoon from '@iconify/icons-bi/cloud-moon';
import weatherRainShowersNight20Regular from '@iconify/icons-fluent/weather-rain-showers-night-20-regular';
import React from "react";



export const getIcon = (name,size) => {

    const iconsMap =  {
        '01d': <Icon icon={sunnyOutline} width={size} height={size} />,
        '02d': <Icon icon={partlySunnyOutline} width={size} height={size} />,
        '03d': <Icon icon={cloudIcon} width={size} height={size} />,
        '04d': <Icon icon={cloudIcon} width={size} height={size} />,
        '09d': <Icon icon={cloudDrizzle} width={size} height={size} />,
        '10d': <Icon icon={weatherRainShowersDay48Regular} width={size} height={size} />,
        '11d': <Icon icon={cloudLightningRain} width={size} height={size} />,
        '13d': <Icon icon={cloudSnow} width={size} height={size} />,
        '50d': <Icon icon={cloudFog} width={size} height={size} />,
        '01n': <Icon icon={moonIcon} width={size} height={size} />,
        '02n': <Icon icon={cloudMoon} width={size} height={size} />,
        '03n': <Icon icon={cloudIcon} width={size} height={size} />,
        '04n': <Icon icon={cloudIcon} width={size} height={size} />,
        '09n': <Icon icon={cloudDrizzle} width={size} height={size} />,
        '10n': <Icon icon={weatherRainShowersNight20Regular} width={size} height={size} />,
        '11n': <Icon icon={cloudLightningRain} width={size} height={size} />,
        '13n': <Icon icon={cloudSnow} width={size} height={size} />,
        '50n': <Icon icon={cloudFog} width={size} height={size} />,
    };


    if (iconsMap[name]) {
        return iconsMap[name];
    }
    return svgIcons.sunny;
};