const Cabin = require('../models/cabin');
const cabins = require('./cabinsList.js');
const {getConnection} = require("../database/connection.js");



function addList(){
    cabins.map((cabin, index)=> {
        const temp = new Cabin({
            title: cabin.title,
            guests: cabin.guests,
            bedrooms: cabin.bedrooms,
            bathrooms: cabin.bathrooms,
            beds: cabin.beds,
            license: cabin.license,
            link: cabin.link,
            rating: cabin.rating,
            reviews: cabin.reviews,
            amenities: cabin.amenities,
            coordinates: {latitude: cabin.coordinates.latitude, longitude: cabin.coordinates.latitude},
            description: cabin.description
        })
        if(index === 0 ){
            insert(temp)
        }
    })
}



async function insert(cabin){

    await cabin.save(function (err) {
        if (err) { console.log(err) }
        // Successful - redirect to new book record.
        console.log("Cabin Added")
    });
}

addList();




