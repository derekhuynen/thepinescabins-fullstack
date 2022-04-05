// import mongoose from "mongoose";
// import * as connections from "../util/connection.js";
//
// const Schema = mongoose.Schema;
// const valuesSchema = new Schema({
//     title: {type: String, required: true},
//     score: {type: Number, required: true},
// })
//
// const RatingSchema = new Schema({
//         cabinID: {type: Number, required: true},
//         cabinCode: {type: Number, required: true},
//         overallRating: {type: valuesSchema},
//         overallCount: {type: valuesSchema},
//         ratings: {
//             cleanliness: {type: valuesSchema},
//             accuracy: {type: valuesSchema},
//             communication: {type: valuesSchema},
//             location: {type: valuesSchema},
//             checkIn: {type: valuesSchema},
//             value: {type: valuesSchema},
//         }
// })
//
// // Virtual for Event URL
// // RatingSchema
// //     .virtual('url')
// //     .get(function () {
// //         return '/api/rating/' + this.id;
// //     });
//
// //Export model
// export default connections.db.model('Rating', RatingSchema);