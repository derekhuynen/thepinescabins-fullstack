import react, {useEffect, useState} from 'react'
import Nav from "../components/Nav/Nav";
import React from "react";
import '../css/Home.css'




export default function Home(){

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.offsetHeight
        console.log(window.scrollY)
    }

    return(
        <div onClick={scrollHandler} className={"home-container"}>
            <Nav />
            <h1 onClick={scrollHandler} >{`Welcome to  Page`}</h1>
        </div>
    )
}

