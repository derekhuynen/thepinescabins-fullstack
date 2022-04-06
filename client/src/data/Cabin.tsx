export interface Cabin{
    cabinName: string,
    cabinCode: number,
    guests: number,
    adults: number,
    bedrooms: number,
    bathrooms: number,
    beds: number,
    pet: boolean,
    license: string,
    url: string,
    rating: {
        cabinCode: number,
        overallRating: number,
        overallCount: number,
        ratings: {}
    },
    amenities: [],
    coordinates: {
        latitude: number,
        longitude: number},
    description: string
}

export interface filterConditions {
    guests: number,
    bedrooms: number,
    bathrooms: number,
    beds: number,
    rating: number,
    reviews: number,
}


export function getCabins() {
        return fetch ('http://localhost:3001/api/cabin')
            .then(response => response.json())
            .then(cabins => {
                return cabins.item
            })
            .catch(e => {
                console.log("Cannot Connect to DB");
                console.log(e);
                return e
            })
}

