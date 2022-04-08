import React, {useEffect, useState} from 'react'
import '../../css/Nav.css'
import { Link } from "react-router-dom";
import Logo from '../../photos/Logo.png'
//import Weather from '../components/Weather'
import axios from 'axios';
import SearchBar from "../SearchBar";



const URL = "https://api.openweathermap.org/data/2.5/weather?q=big bear lake&units=imperial&appid=" + "5202edc74512b6765f448a81c7c4b25d";


export default function NavBar() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)




    return (
        <div className='header'>
            <div className={"header-child"}>
                <Link to='/'>
                    <img
                        className="header__icon"
                        src= {Logo}
                        alt="Pines Cabins, Big Bear Lake, Cabin Management"
                    />
                </Link>
            </div>

            <div className={"header-child"}>
                    <SearchBar />
            </div>

            <div className={'header-child'}>

            </div>

        </div>
    )
}
