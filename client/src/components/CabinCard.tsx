import {Cabin} from "../data/Cabin";
import '../css/Cabin.css'


export default function CabinCard({cabin}: {cabin: Cabin }) {

    return (
        <div className={"card-container"}>
            {cabin.cabinName}
        </div>
    )
}