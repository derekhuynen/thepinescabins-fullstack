import express from "express";

const router = express.Router();

import cabinController from '../controllers/cabinController.js';

/// Cabin ROUTES ///


// GET request for list of all cabin items.
router.get('/', cabinController.findAll);
// GET request for one cabin.
router.get('/:id', cabinController.findOne);

// POST request for creating cabin.
router.post('/:id', cabinController.createOne);

// POST request to delete cabin.
router.delete('/:id', cabinController.deleteOne);

// PUT request to update cabin.
router.put('/:id', cabinController.updateOne);

export { router as cabinRouter }