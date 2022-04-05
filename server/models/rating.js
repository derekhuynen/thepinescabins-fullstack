import mongoose from "mongoose";
import * as connections from "../util/connection.js";
import {body, validationResult} from "express-validator";

const Schema = mongoose.Schema;
const valuesSchema = new Schema({
    title: {type: String, required: true},
    score: {type: Number, required: true},
})

const RatingSchema = new Schema({
        cabinID: {type: Number, required: true},
        cabinCode: {type: Number, required: true},
        overallRating: {type: valuesSchema},
        overallCount: {type: valuesSchema},
        ratings: {
            cleanliness: {type: valuesSchema},
            accuracy: {type: valuesSchema},
            communication: {type: valuesSchema},
            location: {type: valuesSchema},
            checkIn: {type: valuesSchema},
            value: {type: valuesSchema}
        }
})

RatingSchema.statics.checkData = function (req) {
    body('cabinID', 'Cabin ID is Not Valid.').trim().isLength({min: 1}).escape();
    body('cabinCode', 'Cabin Code is Not Valid').isNumeric();


    return validationResult(req);
};

RatingSchema.statics.createItem = function (req) {
    return new req.myModel({
            cabinID: req.body.cabinID,
            cabinCode: req.body.cabinCode,
            overallRating: req.body.overallRating,
            overallCount: req.body.overallRating,
            ratings: req.body.ratings
        })
};


//Export model
export default connections.db.model('Rating', RatingSchema);