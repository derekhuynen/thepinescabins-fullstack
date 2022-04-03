const express = require('express');
const router = express.Router();

const cabin_controller = require('../controllers/cabinController');

/// Cabin ROUTES ///


// POST request for creating cabin.
router.post('/cabin/create', cabin_controller.cabin_create_post);

// POST request to delete cabin.
router.post('/cabin/:id/delete', cabin_controller.cabin_delete_post);

// POST request to delete cabin.
router.delete('/cabin/:id', cabin_controller.cabin_delete_post);


// POST request to update cabin.
router.put('/cabin/:id', cabin_controller.cabin_update_post);

// GET request for one cabin.
router.get('/cabin/:id', cabin_controller.cabin_detail);

// GET request for list of all cabin items.
router.get('/cabins', cabin_controller.cabin_list);








module.exports = router;