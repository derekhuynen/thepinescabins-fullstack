import React, {useEffect, useState} from "react";
import {Cabin,getCabins, filterConditions} from "../data/Cabin";
import CabinCard from "../components/CabinCard";
import '../css/CabinCSS.css'


function displayCabins(cabins: Cabin[]){
    return cabins.map((cabin: Cabin, index: number)=>{
        return(
            <CabinCard cabin={cabin} key = {index} />
        )
    })
}

// function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
//     return key in obj
// }
//
// function filterCabins(cabins: Cabin[],filters: filterConditions){
//     return cabins.filter((cabin: Cabin)=>{
//         for (let filtersKey in filters) {
//             if (hasKey(cabin, filtersKey) && hasKey(filters, filtersKey)) {
//                 let result = (cabin[filtersKey] > filters[filtersKey])
//                 if(!result) return false
//             }
//         }
//         return true;
//     })
// }


export default function DisplayCabins() {
    const [cabins, setCabins] = useState<Cabin[]>([]);

useEffect(()=>{
    getCabins().then(result => setCabins(result)).catch(err => console.log(err))

},[])



    return (
        <div className={"container"}>

            {!cabins.length ? "Loading..." : displayCabins(cabins)}
        </div>
    )
}