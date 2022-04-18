import '../../css/Test.css';
import React, {useState} from "react";
import Map from '../Map.js'
import {businesses} from '../../JSON/businesses.js'
import {getFilteredRows} from "../filter.js";


function items2(topics) {

    return (
        <div className={"amenities"}>
            {topics.map((topic, index) => {
                return (
                    <div key={index} id={index} className={"amenity"}>
                        <h4>{topic}</h4>
                    </div>
                )
            })}
        </div>
    )
}

function openLink(link) {
    window.open(link)
}

const items = (data) => {
    return data.map((activity, index) => {

        return (
            <div key={index} className={'restaurant'} onClick={() => {
                openLink(activity.link)
            }}>
                <div className={"restaurantImage"}>
                    <img className={"restaurantImg "} src={activity.image1} alt="Restaurant in Big Bear"/>
                </div>

                <div className={'restaurantInfo'}>
                    <div className={'restaurantTop'}>
                        <h2>{activity.title}</h2>
                    </div>

                    <div className={"restaurantBottom"}>

                        {items2(activity.topics)}
                        <h4>{activity.address.toString()}</h4>
                        <h4>{activity.number}</h4>
                    </div>

                </div>
            </div>
        )
    });
}




const center = {
    lat: 34.23917082635063,
    lng: -116.9122004384206
}
export default function Activities() {
    const [displayData, setDisplayData] = useState(businesses);
    const topics = [{key: "Rentals", value: "Rental"},{key: "Marina", value: "Marina"},{key: "Activities", value: "Activity"},{key: "Store", value: "Store"},{key: "Family", value: "Family"}];
    const [selectedTopic, setSelectedTopic] = useState("");



    function idk(topic, compare) {

        if (topic.key.toString() === compare.toString()) {
            return (
                <div key={topic.value} className={"topicHighLight"} onClick={() => {onClickHandler(topic)}}>
                    <h4>{topic.key}</h4>
                </div>
            )
        } else {
            return (
                <div key={topic.value} className={"topic"} onClick={() => {onClickHandler(topic)}}>
                    <h4>{topic.key}</h4>
                </div>
            )
        }
    }

    const onClickHandler = (topic) => {
        if(topic.key.toString() === selectedTopic.toString()){
            setSelectedTopic("");

        } else{
            setDisplayData(getFilteredRows(businesses, topic.value));
            setSelectedTopic(topic.key);
        }


    }


    return (
        <>
            <div className={'container'}>
                <div className={'left'}>
                    <div className={"search"}>
                        <h4>Search</h4><input
                        onChange={(e) => {
                            setDisplayData(getFilteredRows(businesses, e.target.value))
                        }}
                        placeholder={selectedTopic}
                    />
                    </div>

                    <div className={"topicsInline"}>
                        {topics.map((topic, index) => (
                            idk(topic, selectedTopic)
                        ))}
                    </div>
                    {items(displayData)}
                </div>

                <div className={'right'}>
                    <Map items={displayData} zoom={14} center={center} comp={"activities"}/>
                </div>
            </div>
        </>
    )
}