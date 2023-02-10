

const SampleService = require('../services/sampleService')

function SampleController(objectCollection) {

    const app = objectCollection.app
    const responseWrapper = objectCollection.responseWrapper


    const sampleService = new SampleService(objectCollection)


    //@Post sample/insert
    app.post('/' + 'api/' + 'sample/insert', async function (req, res) {
        const [err, resData] = await sampleService.sampleInsert(req.body);
        if (!err) {
            console.log("sample/insert| Error: ", err);
            res.json(responseWrapper.getResponse({}, resData, 200, req.body));
        } else {
            console.log("api/sample/insert | Error: ", err);
            res.json(responseWrapper.getResponse(err, resData, -9999, req.body));
        }
    })


}
module.exports = SampleController;
