import app from './util/middleware.js'
import mongoose from "mongoose";


// //connect to DataBase
await mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to Database.")
    })
    .catch(err => {
        console.log("DB Connection Error: ", err.message);
        process.exit(1);
    });



app.listen(app.get('port'), async () => {
    console.log('Listening on port: ' + app.get('port'));
});