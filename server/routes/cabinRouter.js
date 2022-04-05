import express from "express";
import cabinController from '../controllers/cabinController.js';
import bodyParser from "body-parser";
import Cabin from "../models/cabin.js";
import CRUD from "../controllers/CRUD.js";
const router = express.Router();
const jsonParser = bodyParser.json()


router.use(function addObject(req,res,next){
    req.myModel = Cabin;
    next();
})


//Basic CRUD
router.get('/', CRUD.findAll);
router.get('/:id', CRUD.findOne);
router.post('/', jsonParser, CRUD.createOne);
router.delete('/:id', CRUD.deleteOne);
router.put('/:id', CRUD.updateOne);


// PUT request to update cabin.
router.put('/:id', cabinController.updateOne);


export { router as cabinRouter }