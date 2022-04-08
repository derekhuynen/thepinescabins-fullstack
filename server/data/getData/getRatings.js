import Cabin from "../../models/cabin.js";
import fetch from "node-fetch";
import Rating from "../../models/rating.js";


const titles = ["cleanliness", "accuracy", "communication", "location", "checkIn", "value"];



function loadData() {
    Cabin.find({}, function (err, doc) {
        if (err) {
            console.log("Error getting Cabins")
        } else {
            doc.forEach(
                (cabin) => {
                    if (cabin.url.includes("airbnb")) {
                        dataFromURL(cabin)
                    }else{
                        return new Rating({
                            cabinCode: cabin.cabinCode,
                            overallRating: 0,
                            overallCount: 0,
                            ratings: {}
                        })

                    }
                })
        }
    });
}

function dataFromURL(cabin) {
    fetch(cabin.url)
        .then(response => {
            return response.text()
        })
        .then(data => parseData(data, cabin))
        .then(results => {
            return new Rating({
                cabinCode: results.cabinCode,
                overallRating: results.overallRating,
                overallCount: results.overallCount,
                ratings: results.ratings
            })
        }).then((rating) => {
            save(rating,cabin)
    }).catch(err => console.log(err));
}

function save(rating,cabin){
    rating.save(function (err, doc) {
        if (err) {
            console.log("Rating Failed to Save")
        } else {
            Cabin.updateOne({_id: cabin._id}, {rating: rating}, function (err, doc) {
                if (err) {
                    console.log("Cabin Update Failed");
                }
            })
        }
    })
}


function parseData(data, cabin) {
    const start = data.indexOf("ratings", 200000) + 11;
    const end = data.indexOf("seeAllReviewsButton", start);
    const newData = data.substring(start, end);
    let cabinRating = {
        cabinCode: cabin.cabinCode,
        overallRating: 0,
        overallCount: 0,
        ratings: {}
    }
    if (start > 250000 && start < end && end < 450000) {
        parseValues(newData,cabinRating);
        parseOverAll(newData, cabinRating);
    } else {
        console.log("Failed at parseData: " + cabin.cabinName);
    }
    return cabinRating
}

function parseValues(newData,cabinRating) {
    let values = [];
    const arr = newData.substring(0, newData.indexOf("heading") - 4).split("},{")
    if (arr.length > 3) {
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i].substring(arr[i].indexOf("localizedRating") + 18, arr[i].indexOf("label") - 3)
            values.push({[titles[i]]: Number(temp)});
        }
        cabinRating.ratings = values.reduce(
            (obj, item) => Object.assign(obj, item, {}))
    } else {
        console.log("Failed to get all 6 Values");
    }
}

function parseOverAll(newData, cabinRating) {
    const rating = newData.substring(newData.indexOf("overallCount") + 14, newData.length - 2).split(",");
    cabinRating.overallRating = Number(rating[1].substring(16, rating[1].length));
    cabinRating.overallCount = Number(rating[0]);
}


loadData()
