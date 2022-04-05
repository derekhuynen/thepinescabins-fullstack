import express from "express";
import bodyParser from "body-parser";
import eventController from "../controllers/eventController.js";
import Event from "../models/event.js";
import CRUD from "../controllers/CRUD.js";
const router = express.Router();
const jsonParser = bodyParser.json()


router.use(function addObject(req,res,next){
    req.myModel = Event;
    next();
})

//BASIC Crud
router.get('/', CRUD.findAll);
router.get('/:id', CRUD.findOne);
router.post('/',jsonParser, CRUD.createOne);
router.delete('/:id', CRUD.deleteOne);


// GET all events for a Cabin
router.get('/cabin/:cabinID', eventController.findAllForCabin);


export { router as eventRouter, }