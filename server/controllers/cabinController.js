var Cabin = require('../models/cabin');
const {body, validationResult} = require("express-validator");


// Handle get list of all cabins.
exports.cabin_list = async function (req, res, next) {

    Cabin.find({}, function (err, docs) {
        if (err) {
            return next(err)
        } else {
            res.send(docs)
        }
    });

};

// Handle get for a specific cabin.
exports.cabin_detail = function (req, res, next) {
    Cabin.findById(req.params.id, function (err, docs) {
        if (err) {
            return next(err);
        } else {
            res.send(docs)
        }
    });
};


// Handle cabin create on POST.
exports.cabin_create_post = function (req, res,next) {

    console.log()
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
exports.cabin_delete_post = function (req, res) {
    Cabin.findByIdAndRemove(req.params.id, function(err,doc) {
        if (err) { return next(err); }
        // Success - got to books list.
        res.send("Booked Deleted");
    });
};


// Handle cabin update on POST.
exports.cabin_update_post = function (req, res,next) {

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
};




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
