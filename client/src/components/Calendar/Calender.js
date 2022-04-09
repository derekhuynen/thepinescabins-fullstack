import React, {useEffect, useRef, useState} from 'react'
import Day from "./Day"

import {Icon} from '@iconify/react';
import leftArrowCircle from '@iconify/icons-bxs/left-arrow-circle';
import rightArrowCircle from '@iconify/icons-bxs/right-arrow-circle';
import './Calender.css';

const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const Days = {Sunday: "Su", Monday: "Mo", Tuesday: "Tu" , Wednesday: "We", Thursday: "Th", Friday: "Fr", Saturday: "Sa"}


const today = new Date();

//Get the Dat of the week. Sun = 0, Mon = 1...
function getDayOfWeek(year, month, day) {
    return new Date(year, month, day).getDay();
}

//Get Days in Month. Date() where day = 0 return totals days of previous month.
function getDaysInMonth(year, month) {
    const temp = increaseMonth(year,month);
    return new Date(temp.year, temp.month, 0).getDate();
}

//Increase Month by 1. If current month is Dec also increase year.
const increaseMonth = (year, month) => {
    return {
        year: (month === 11 ? year + 1 : year),
        month: (month === 11 ? 0 : month + 1)
    }
}

//Decrease Month by 1. If current month is Jan also decrease year.
const decreaseMonth = (year, month) => {
    return {
        year: (month === 0 ? year - 1 : year),
        month: (month === 0 ? 11 : month - 1)
    }
}

//Weird way of comparing Dates.
const isEqual = (date, date2) => {
    return date.getDate() === date2.getDate() && date.getMonth() === date2.getMonth() && date.getFullYear() === date2.getFullYear();
}

//Create Headers for Calender
const createHeaders = (boxSize) => {
    return Object.entries(Days).map((day) => {
        return (
            <div key={day} className={"calendar-header calendar-box"} style={{height: boxSize, width: boxSize}}>
                <h5>{day[1]}</h5>
            </div>)
    })
}

//Create a List of all the of Days for the Calender. 5 rows of 7
const createDays = (year, month) => {
    const results = []

    //Get the Day of the Week for first day of month.
    const dayOfWeek = getDayOfWeek(year, month, 1);

    //Get the Number of Days in Current Month
    const daysInMonth = getDaysInMonth(year, month);

    //Get Number of Days in Previous Month.
    const previousYearMonth = decreaseMonth(year,month);
    const daysInPreviousMonth = getDaysInMonth(previousYearMonth.year, previousYearMonth.month);
    const nextYearMonth = increaseMonth(year,month);

    //Create the Spacer Boxes From Previous Month.
    for (let i = daysInPreviousMonth - dayOfWeek + 1; i <= daysInPreviousMonth ; i++) {
        const temp = new Date(previousYearMonth.year, previousYearMonth.month, i)
        results.push({date: null, styles: "calendar-box", highLighted: false, day: "nothing"})
    }

    //Create Boxes for Each Day of Current Month.
    for (let i = 1; i <= daysInMonth; i++) {
        const temp = new Date(year, month, i);
        results.push({date: temp, styles: (isEqual(temp, today) ? "calendar-box calendar-today" : "calendar-box"), highLighted: false, day: "calendar-day"})
    }

    const totalDays = ((dayOfWeek + daysInMonth) > 35) ? 42: 35;
    //Create the Boxes to Fill the Remaining Spots of the Calender with info for next Month.
    for (let i = 1; i <= (totalDays - daysInMonth - dayOfWeek); i++) {
        const temp = new Date(nextYearMonth.year, nextYearMonth.month, i)
        results.push({date: null, styles: "calendar-box", highLighted: false, day: "nothing"});
    }

    return results
}


export default function Calender(props) {

    const [month, setMonth] = useState(props.selectedDate === undefined ? today.getMonth() : props.selectedDate.getMonth());
    const [year, setYear] = useState(props.selectedDate === undefined ? today.getFullYear() : props.selectedDate.getFullYear());
    const [list, setList] = useState(createDays(year, month));


    const didMount = useRef(false);
    useEffect(() => {
        if (didMount.current) {
            setList(createDays(year, month))
        } else (
            didMount.current = true
        )
    }, [year, month])

    const onClick = (date,isGrey) => {

        if(isGrey){
            setMonth(date.getMonth())
        }
        if (props.selectedDate !== undefined && isEqual(props.selectedDate, date)) {
            props.onClick(undefined)
        } else {
            props.onClick(date)
        }
    }

    const boxSize = props.boxSize;
    const fontSize = props.fontSize;

return (
    <div className={"calendar-container"} style={{width:(boxSize*7+4), fontSize: fontSize}}>

            <div className={"calendar-header-month"}>
                    <Icon icon={leftArrowCircle} className={"calendar-arrow"} onClick={() => {
                        const temp = decreaseMonth(year, month);
                        setYear(temp.year);
                        setMonth(temp.month);
                    }}/>
                <h2> {Months[month]} ({year})</h2>
                <Icon icon={rightArrowCircle} className={"calendar-arrow"} onClick={() => {
                    const temp = increaseMonth(year, month);
                    setYear(temp.year);
                    setMonth(temp.month);
                }}/>

        </div>

        <div className={"calender-bottom"}>
            <div className={"calendar-headers"}>
                {createHeaders(boxSize)}
            </div>
            <div className={"calendar-days"}>
                {list.map((item, index) => {
                    item.highLighted = (props.selectedDate !== undefined && isEqual(item.date, props.selectedDate));
                    return (<Day {...item} onClick={onClick} key={index} boxSize={boxSize}/>)
                })}
            </div>
        </div>
    </div>
)
}