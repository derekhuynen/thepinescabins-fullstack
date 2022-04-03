import React, {useEffect, useState} from "react";
import {getCabins} from '../data/GetCabins'
import {Cabin, filterConditions} from "../data/GetCabins";
import CabinCard from "../components/CabinCard";
import '../css/Cabin.css'


function displayCabins(cabins: Cabin[]){
    return cabins.map((cabin: Cabin, index: number)=>{
        return(
            <CabinCard key={index} cabin={cabin}/>
        )
    })
}

function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
    return key in obj
}

function filterCabins(cabins: Cabin[],filters: filterConditions){
    return cabins.filter((cabin: Cabin)=>{
        for (let filtersKey in filters) {
            if (hasKey(cabin, filtersKey) && hasKey(filters, filtersKey)) {
                let result = (cabin[filtersKey] > filters[filtersKey])
                if(!result) return false
            }
        }
        return true;
    })
}


export default function DisplayCabins() {
    const [cabins, setCabins] = useState<Cabin[]>([]);
    const [filters, setFilters] = useState<filterConditions>({
        guests: 0,
        bedrooms: 0,
        bathrooms: 0,
        beds: 0,
        rating: 0,
        reviews: 0,
    });


        useEffect(() => {
            setFilters({
                guests: 0,
                bedrooms: 0,
                bathrooms: 0,
                beds: 0,
                rating: 0,
                reviews: 0,
            })

        getCabins().then(arr => {
            setCabins(arr)

        })

    }, [])

    return (
        <div className={"container"}>
            {!cabins.length ? "Loading..." : displayCabins(filterCabins(cabins, filters))}
        </div>
    )
}