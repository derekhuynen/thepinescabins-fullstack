import Cabin from "../models/cabin.js";
import fs from 'fs';


function addList(cabins){
    cabins.map((cabin, index)=> {
        const temp = new Cabin({
            cabinName: cabin.cabinName,
            cabinCode: cabin.cabinCode,
            guests: cabin.guests,
            adults: cabin.adults,
            bedrooms: cabin.bedrooms,
            bathrooms: cabin.bathrooms,
            beds: cabin.beds,
            pet: cabin.pet,
            license: cabin.license,
            url: cabin.url,
            amenities: cabin.amenities,
            coordinates: {latitude: cabin.coordinates.latitude, longitude: cabin.coordinates.latitude},
            description: cabin.description
        })
        // if(index === 0 ){
        //     insert(temp)
        // }
    })
}

function insert(cabin){
    cabin.save(function (err) {
        if (err) { console.log(err) }
        // Successful - redirect to new book record.
        console.log("Cabin Added")
    });
}

function load(){
    const data = fs.readFileSync('cabinsList.json', 'utf-8');
    const doc = JSON.parse(data)
    addList(doc.cabins)

}

load();


