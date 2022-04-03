import express from 'express';
import logger from 'morgan';
import compression from 'compression';
import helmet from 'helmet';

import {cabinRouter} from './routes/cabinRouter.js'

import mongoose from "mongoose";
import cors from 'cors';


const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/First").then(()=>{
    console.log("Connected to DB")
}).catch(() => console.log("Failed to Connect to DB"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression()); // Compress all routes

app.get('/', function(res, req){
    res.send("API Works")
});
app.use('/cabin', cabinRouter);  // Add catalog routes to middleware chain.

// catch 404 and forward to error handler
app.use(function(err,req, res, next) {
    console.error(err);
    res.send(err);
});


app.listen(3001, async () => {
    console.log('listening on port 3001');
});

