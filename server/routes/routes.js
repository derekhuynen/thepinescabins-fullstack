import {cabinRouter} from "./cabinRouter.js";
import {eventRouter} from "./eventRouter.js";
import {ratingRouter} from "./ratingRouter.js";



export default function Routes(app){
    //Default Router
    // @url /
    app.get('/', function(res, req){
        res.send("API Works")
    });

    //Cabin Router
    // @url  /api/cabin
    app.use('/api/cabin', cabinRouter);

    //Cabin Router
    // @url  /api/event
    app.use('/api/event', eventRouter);

    // //Cabin Router
    // // @url  /api/event
    app.use('/api/rating', ratingRouter);
}
