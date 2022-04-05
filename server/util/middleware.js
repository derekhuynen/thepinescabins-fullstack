import express from 'express';
import logger from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from "cors";
import Routes from "../routes/routes.js";
import 'dotenv/config';
import bodyParser from "body-parser";



const app = express();

app.set("port", process.env.PORT)

//middleware
console.log("Adding Middleware");
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
Routes(app);

// catch 404 and forward to error handler
app.use(function(req, res,next, err) {
    res.status(500).json({Error: (err)});
});

export default app;

