
// MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')


if (mode === 'local') {
    i = 1
    var mongoURILocal = global.config.mongoURILocal
} else if (mode === 'staging') {
    var mongoURIStaging = global.config.mongoURIStaging

}
else if (mode === 'preProd') {
    var mongoURIPreProd = global.config.mongoURIPreProd

}
else if (mode === 'prod') {
    var mongoURIProd = global.config.mongoURIProd

}

let mongoConn;
switch (i) {
    case 1:
        mongoConn = mongoURILocal;
        break;
    case 2:
        mongoConn = mongoURIStaging;
        break;
    case 3:
        mongoConn = mongoURIPreProd;
        break;
    case 4:
        mongoConn = mongoURIProd;
        break;
}

try {
    // MongoClient.connect(mongoConn, function (err, db) {
    //     if (err) {
    //         console.log("error------" + err)

    //     } else {
    //         console.log(`Successfully connected to mongodb`)
    //     }
    // })

    mongoose
        .connect(mongoConn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }).then(() => console.log("Database connected!"))
        .catch(err => console.log(err));
} catch (exception) {
    console.log("error", exception);
}






