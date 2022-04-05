// import express from "express";
// import bodyParser from "body-parser";
// import CRUD from "../controllers/CRUD.js";
// import Rating from "../models/rating.js";
// const router = express.Router();
// const jsonParser = bodyParser.json()
//
// router.use(function addObject(req,res,next){
//     req.myModel = Rating;
//     next();
// })
//
// // GET request for list of all cabin items.
// router.get('/', CRUD.findAll);
//
// // GET request for one cabin.
// router.get('/:id', CRUD.findOne);
//
// // POST request for creating cabin.
// router.post('/', jsonParser, CRUD.createOne);
//
// // POST request to delete cabin.
// router.delete('/:id', CRUD.deleteOne);
//
//
// export { router as ratingRouter }