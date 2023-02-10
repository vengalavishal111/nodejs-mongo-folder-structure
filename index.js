const express = require('express')
const bodyParser = require('body-parser')
require('./server/utils/globalConfig');
// require('dotenv').config()
require('./server/dbConfig')
const cors = require('cors')
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // For legacy browser support
};

const app = express()
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));



const Util = require('./server/utils/util')
const util = new Util()
const ResponseWrapper = require('./server/utils/responseWrapper')
const responseWrapper = new ResponseWrapper(util)


var objCollection = {
    app: app,
    util: util,
    responseWrapper: responseWrapper
};


const ControllInterceptor = require('./server/interceptors/controllerInterceptor');
new ControllInterceptor(objCollection);

const port = global.config.port
app.listen(port, () => console.log(`Server up and running on port ${port} !!!!..`));

