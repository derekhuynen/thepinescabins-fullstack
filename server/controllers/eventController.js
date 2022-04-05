import {body,validationResult} from "express-validator";
import Event from "../models/event.js";



// Handle cabin create on POST.
function createOne(req, res, next) {
    // Extract the validation errors from a request.


    const item = new Event({
        cabinID: req.body.cabinID,
        cabinCode: req.body.cabinCode,
        uid: req.body.uid,
        website: req.body.website,
        summary: req.body.summary,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        url: req.body.url,
        lastFour: req.body.url
    });

        item.save(function (err, doc) {
            if (err) {
                return res.status(400).json(err);
            }else{
                res.status(201).json(doc);
            }
        });

}

export async function findAllForCabin (req, res, next) {
    Event.find({cabinID: req.params.cabinID}, await function(err, doc){
        if (err) {
            return next("Failed to Find get All Events");
        } else {
            res.send(doc)
        }
    });
}




export default {findAllForCabin, createOne}