const mongoose = require('mongoose');

const { MONGODB_CONNECT } = process.env;

exports.connect = () => {
    mongoose.connect(MONGODB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Sucessfully connected to database");
        })
        .catch((error) => {
            console.log("Error connecting to database");
            console.error(error);
            process.exit(1);
        });
};