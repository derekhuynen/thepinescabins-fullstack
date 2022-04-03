import {Cabin} from "../data/GetCabins";
import '../css/Cabin.css'


export default function CabinCard({cabin}: {cabin: Cabin }) {

    return (
        <div className={"card-container"}>
            <h3>{cabin.title}</h3>
            <p>Guests: {cabin.guests}</p>
            <p>Rating: {cabin.rating}</p>
            <p>Reviews: {cabin.reviews}</p>
        </div>
    )
}