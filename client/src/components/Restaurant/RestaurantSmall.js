import React from "react";
import StarRatings from "react-star-ratings";


function openLink(link) {
    window.open(link)
}

export default function RestaurantSmall({info}) {
    return (
        <div className="location-info" >
            <div className={"image"}>
                <img src={info.image_url} alt={info.title}/>
            </div>

            <div className={"locationInfo_Bottom"} onClick={() => {
                openLink(info.url)
            }}>
                <h2>{info.name}</h2>
                <div className={"restaurantRating"}>
                    <StarRatings
                        rating={info.rating}
                        starRatedColor="#FF385C"
                        numberOfStars={5}
                        name='rating'
                        starDimension={'15'}
                        starSpacing={'1'}
                        starEmptyColor={"gray"}
                    />
                    <h5 className={"gray"}>({info.review_count} reviews)</h5>
                </div>

            </div>
        </div>
    )
}