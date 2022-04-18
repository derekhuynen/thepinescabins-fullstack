import {cabinRouter} from "./cabinRouter.js";
import {eventRouter} from "./eventRouter.js";
import {ratingRouter} from "./ratingRouter.js";
import path from "path";
import {fileURLToPath} from "url";
import express from "express";


export default function Routes(app){


    // //Set __dirname Path
    // const __dirname = path.dirname(fileURLToPath(import.meta.url));
    //
    // //Initialize Static Files
    // app.use(express.static(path.join(__dirname, '../../client/build')));
    // console.log(path.join(__dirname, '../../client/build'));
    // //Default Router
    // // @url /
    // app.get('/api', function(req, res){
    //     res.send("API Works")
    // });

    //Cabin Router
    // @url  /api/cabin
    app.use('/api/cabin', cabinRouter);

    //Cabin Router
    // @url  /api/event
    app.use('/api/event', eventRouter);

    // //Cabin Router
    // // @url  /api/event
    app.use('/api/rating', ratingRouter);

    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname + '../../client/build/index.html'))
    // })
}
