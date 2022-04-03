const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CabinSchema = new Schema(
    {
        title: {type: String, required: true},
        guests: {type: Number, required: true},
        bedrooms: {type: Number, required: true},
        bathrooms: {type: Number, required: true},
        beds: {type: Number, required: true},
        license: {type: String, required: true},
        link: {type: String, required: true},
        rating: {type: Number, required: true},
        reviews: {type: Number, required: true},
        amenities: {type: Array},
        coordinates: {type: Object},
        description: {type: String}

    }
);

// Virtual for book's URL
CabinSchema
    .virtual('url')
    .get(function () {
        return '/catalog/cabin/' + this.id;
    });

//Export model
module.exports = mongoose.model('Cabin', CabinSchema);