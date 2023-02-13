

const Sample = require("../models/sampleModel");

function SampleService(objectCollection) {
    const util = objectCollection.util;

    this.sampleInsert = async function (request) {
        let responseData = []
        error = true

        const sample = new Sample({
            sample_id: request.sample_id,
            sample_1: request.sample_1,
            sample_2: request.sample_2
        })
        await sample.save().then((data) => {
            responseData = data
            error = false
        })
        .catch((err) => {
                console.log("err-------" + err);
                error = err
            });
        return [error, responseData]

    };

}




module.exports = SampleService;
