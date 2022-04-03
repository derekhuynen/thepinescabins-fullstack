export interface Cabin{
    title: string,
    guests: number,
    bedrooms: number,
    bathrooms: number,
    beds: number,
    license: number,
    link: string,
    rating: number,
    reviews: number,
    amenities: [],
    coordinates: Record<number, number>,
    description: string,
}

export interface filterConditions {
    guests: number,
    bedrooms: number,
    bathrooms: number,
    beds: number,
    rating: number,
    reviews: number,

}

// export function displayCabins(cabins: Cabin[]){
//
//     return cabins.map((cabin: Cabin, index: number)=>{
//         return(
//             <div key={index}>
//                 {cabin.title}
//             </div>
//         )
//     })
// }


export function getCabins() {
        return fetch ('http://localhost:3001/catalog/cabins')
            .then(response => response.json())
            .catch(e => {
                console.log("Cannot Connect to DB");
                console.log(e);
                return []
            })
}

