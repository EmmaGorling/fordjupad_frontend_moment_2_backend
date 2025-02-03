"use strict"

const Hapi = require("@hapi/hapi");
const Mongoose = require("mongoose");
require("dotenv").config();

const init = async () => {
    // Initiate server
    const server = Hapi.server({
        port: process.env.DB_PORT || 3000,
        host: "localhost",
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    // Connect to MongoDB
    Mongoose.connect(process.env.DB_URL).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('An error occured when connecting to database: ' + error);
    });

    // Routes
    require('./Routes/todoRoutes')(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();