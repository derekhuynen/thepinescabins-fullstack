import React from 'react'
import bannerPic from "../../CabinPhotos/BigBearBanner/Octoberfest Banner.png";
import '../../css/Holiday.css'
import Map from "../Map.js";
import image from '../../CabinPhotos/icon.png'




const oktoberfest = [
    {
        title: "Oktoberfest 2021",
        address: "42900 Big Bear Blvd, Big Bear Lake, CA 92315",
        number: "(909) 585-3000",
        coordinates: {
            "latitude": 34.26096831831202,
            "longitude": -116.86717882427861
        },
        link: "https://bigbearevents.com/oktoberfest/directions/",
        image1: image
    }
]

const center = {
    lat: 34.26096831831202,
    lng: -116.86717882427861
}

function openLink(link){
    window.open(link)
}

export default function OctoberFestPage() {
    return (
        <div className={"holiday-page-container"}>
            <div className={"holiday-banner"}>
                <div className={"holiday-center"}>
                    <img src={bannerPic} alt={"OktoberFest in Big Bear 2021"}/>
                </div>
            </div>
            <div className={"holiday-content-container"}>
                <div className={"holiday-content-left"}>
                    <div className={"holiday-content"}>
                        <h1>Oktoberfest</h1>
                        <h2>2021 Big Bear Lake Oktoberfest</h2>

                        <p>The Big Bear Lake Oktoberfest kicks-off 50+ years of German Tradition on Saturday, Sept. 11th and
                            continues through Sunday, Nov. 7th. We’ve been told something special happens when friends and
                            family come together for a party high in the mountains, under the pines, and 50+ years in the
                            making. In these moments memories are created, life is celebrated and you swear every heart
                            beats as one!</p>

                        <p>Last year we celebrated 50 years of love and went back to our roots.! It was amazing. . . we
                            learned in difficult times celebrating with those that matter most is important.</p>

                        <p>It’s time for Oktoberfest magic, love and hope to fill our fresh mountain air. It’s time for
                            family and friends to come together to celebrate and create a memory or two. It’s time for a
                            reason to smile…</p>


                        <h3>2021 General Admission:</h3>

                        <p>The 2021 Oktoberfest will offer limited capacity. The good news is that this year we are
                            celebrating both inside and outside. And, while our favorite bands from Germany still can not
                            fly into the United States, we’ve lined up some awesome German-American bands to help us
                            celebrate this year. Rest assured we are gearing up for a Fall party like no other!</p>
                    </div>
                    <div className={"holiday-map"}>
                        <Map center={center} zoom={16} items={oktoberfest} comp={"activities"} show={oktoberfest}/>
                    </div>
                </div>
                <div className={"holiday-content-right"}>
                    <div className={"holiday-info-right"}>
                        <h2>Dates</h2>
                        <h4>SEPTEMBER(Sat - Sun): 11–12; 18–19; 25–26</h4>
                        <h4>OCTOBER(Fri & Sun): 1–3; 8–11; 15–17; 22–24; 29–31</h4>
                        <h4>NOVEMBER(Sat - Sun): Nov. 6–7 (Closing Weekend)</h4>
                    </div>
                    <div className={"holiday-info-right"}>
                        <h2>Events Times</h2>
                        <h4>FRIDAY: 4:00pm - 11:00pm (October Only)</h4>
                        <h4>SATURDAY: 1:00pm - 11:00pm</h4>
                        <h4>SUNDAY: 12 noon - 6:00pm</h4>
                    </div>
                    <div className={"holiday-info-right"}>
                        <h2>Ticket Types</h2>
                        <p>2021 Oktoberfest ticket types include general admission, preferred seating, Sunday Family Fun Package, über Burgermeister Party Packs, and eventually Love Shacks…</p>
                        <div className={"holiday-info-right-inner"}>
                            <h3>PREFERRED SEATING:</h3>
                            <p>Get the best seat in the house, and enjoy never having to get up for a refill.  Preferred Seating includes admission, a guaranteed seat, cocktail service, and is available both indoors and outdoors. Please note, all Preferred Seating is limited and Indoor Preferred Seating may include a “shared” table.</p>
                        </div>
                        <div className={"holiday-info-right-inner"}>
                            <h3>ÜBER BURGERMEISTER “LIMITED” EDITION PARTY PACK:</h3>
                            <p>The all-inclusive package 2021!  Limited supply available.  Includes commemorative 50th Anniversary One Liter Stein, First Beer, German Meal and Preferred Seating.  Good Any Day.  Must be 21 years or older to purchase.  Photo ID will be required when picking up package at Oktoberfest.  $100</p>
                        </div>
                        <div className={"holiday-info-right-inner"}>
                            <h3>SUNDAY FAMILY FUN PACKAGE: </h3>
                            <p>Includes admission for (2) adults and (2) kids ages 17 years & under. Also includes Free Kids’ Meals.  Meal choice – 1/4 lb. Hamburger or Dino Nuggets, Fries and a soda / juice.</p>
                        </div>
                        <div className={"holiday-info-right-inner"}>
                            <h3>LOVE SHACK :</h3>
                            <p>We will once again be offering “Love Shacks” for you and your 9 best friends!  We’ve converted a few of our vendor bungalows into Oktoberfest party “Love Shacks.” Each one seats up to 10 & includes cocktail service! Stay tuned for pricing and more info. coming shortly! </p>
                        </div>
                        <h2>LIMITED CAPACITY:</h2>
                        <p>We urge guests to pre purchase tickets.  WE do anticipate that some event days will SELL OUT.  Please note that if we have capacity and that day’s tickets have not SOLD OUT, tickets will be available At The Door for a slightly higher admission fee.

                            Arrival times for entry are offered in time blocks so we can get everyone in without having to wait at the Gate.  Once you’ve arrived, you are welcome to stay the entire day/evening.</p>
                        <div className={"holiday-button-div"}>
                            <button onClick={() => openLink("https://bigbearevents.com/pricing-2021/")}>Ticket Pricing</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}