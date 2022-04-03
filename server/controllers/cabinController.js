import {body, validationResult} from "express-validator";
import Cabin from "../models/cabin.js";
import HttpError from "../customError.js";



// Handle get list of all cabins.

export async function findAll (req, res, next) {
         Cabin.find({}, await function(err, doc){
            if (err) {
                return next("Failed to Find get All Cabins");
            } else {
                res.status(200).json(doc)
            }
        });

    }

// Handle get for a specific cabin.
export async function findOne (req, res, next) {
           Cabin.findById(req.params.id, await function(err, docs){
              if (err) {
                  return next("Failed to Find Cabins");
              } else {
                  res.status(200).json(docs)
              }
          });
      }


// Handle cabin create on POST.
     function createOne(req, res,next) {

        console.log()
        body('title', 'Title must not be empty.').trim().isLength({min: 1});
        body('guests', 'Guests must not be empty.').isNumeric();
        body('bedrooms', 'Bedrooms must not be empty.').isNumeric();
        body('beds', 'Beds must not be empty').isNumeric();
        body('license', 'License must not be empty.').trim().isLength({min: 1});
        body('link', 'Link must not be empty.').trim().isLength({min: 1});
        body('rating', 'Rating must not be empty.').isNumeric();
        body('reviews', 'Reviews must not be empty').isNumeric();

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        const cabin = new Cabin({
            title: req.body.title,
            guests: req.body.guests,
            bedrooms: req.body.bedrooms,
            bathrooms: req.body.bathrooms,
            beds: req.body.beds,
            license: req.body.license,
            link: req.body.link,
            rating: req.body.rating,
            reviews: req.body.reviews,
            amenities: req.body.amenities,
            coordinates: {},
            description: req.body.description
        });

        if (!errors.isEmpty()) {
            res.send(errors.array());

        } else {
            cabin.save(function (err) {
                if (err) {
                    return next(err);
                }
                // Successful - redirect to new book record.
                res.send("Cabin was Added: \n" + cabin);
            });
        }
    }

// Handle cabin delete on POST.
    function deleteOne(req, res) {
        Cabin.findByIdAndRemove(req.params.id, function(err,doc) {
            if (err) { return next(err); }
            // Success - got to books list.
            res.send("Booked Deleted");
        });
    }


// Handle cabin update on POST.
    function updateOne(req, res,next) {

        const temp = validation(req);

        if (!temp.errors.isEmpty()) {
            res.send(temp.errors.array());
        }else{


            var upsertData = temp.cabin.toObject();
            delete upsertData._id;

            Cabin.findByIdAndUpdate({_id: req.params.id}, upsertData, {new: true}, function (err,doc) {
                if (err) { return next(err); }
                res.send(doc);
            });
        }
    }




    function validation(req){

        body('title', 'Title must not be empty.').trim().isLength({min: 1}),
            body('guests', 'Guests must not be empty.').isNumeric(),
            body('bedrooms', 'Bedrooms must not be empty.').isNumeric(),
            body('beds', 'Beds must not be empty').isNumeric(),
            body('license', 'License must not be empty.').trim().isLength({min: 1}),
            body('link', 'Link must not be empty.').trim().isLength({min: 1}),
            body('rating', 'Rating must not be empty.').isNumeric(),
            body('reviews', 'Reviews must not be empty').isNumeric()

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        var cabin = new Cabin({
            title: req.body.title,
            guests: req.body.guests,
            bedrooms: req.body.bedrooms,
            bathrooms: req.body.bathrooms,
            beds: req.body.beds,
            license: req.body.license,
            link: req.body.link,
            rating: req.body.rating,
            reviews: req.body.reviews,
            amenities: req.body.amenities,
            coordinates: {},
            description: req.description
        });
        return {cabin: cabin, errors: errors }
    }

export default {findAll, findOne, createOne, deleteOne,updateOne  }


