import React from 'react'
import { saveAs } from 'file-saver';



export default function IcalTest(){

    const begin =
        "BEGIN:VCALENDAR\n" +
        "PRODID;X-RICAL-TZSOURCE=TZINFO:-//Airbnb Inc//Hosting Calendar 0.8.8//EN\n" +
        "CALSCALE:GREGORIAN\n" +
        "VERSION:2.0\n"

    const end =
        "END:VCALENDAR";

    class eventObj{
        constructor(
            public end: Date,
            public start: Date,
            public uid: string,
            public summary: string
        ){}
    }

    const event1 = new eventObj(
        new Date(2022,4,5),
        new Date(2022,4,2),
        "11111111111111111111111",
        "IDK"
        )

    function createEvent(temp: eventObj){
        return (
            "BEGIN:VEVENT\n" +
            "DTEND;VALUE=DATE:" + dateFormat(temp.end) + "\n" +
            "DTSTART;VALUE=DATE:" + dateFormat(temp.start) + "\n" +
            "UID:" + temp.uid + "\n" +
            "SUMMARY:" + temp.summary + "\n" +
            "END:VEVENT\n"
        )
    }

    function buildCalender(){
        return begin + createEvent(event1) + end
    }

    const download = (filename = 'invite', ext = '.ics') => {
        const blob = new Blob([buildCalender()]);
        saveAs(blob, filename + ext);
        return "Downloaded"
    }

    const dateFormat = (date: Date) =>{
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return year + leadingZero(month) + leadingZero(day);
    }

    function leadingZero(num: number){
        return num < 10 ?  '0' + num : num.toString()
    }

    return (
        <div onClick={() => {
            //download();
            console.log(new Date());
        }}>
            {/*{download()}*/}
        </div>
    )

}