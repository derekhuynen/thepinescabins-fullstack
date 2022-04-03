const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/First";


let dbConnection = null;

function startServer() {

    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, function (err, db) {
        if (err || !db) {
            console.log(err)
        }

        dbConnection = mongoose.connection;
        dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
        console.log("Successfully connected to MongoDB.");

    });
}


function getConnection() {
    return dbConnection === null ? startServer() : dbConnection;
}




module.exports = {
    getConnection,
    startServer
};