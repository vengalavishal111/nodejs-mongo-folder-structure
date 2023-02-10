const Validations = require('../utils/validations')

const SampleController = require('../controller/sampleController')
const SampleService = require('../services/sampleService')

// const Scheduler = require('../utils/sheduler')


function ControllInterceptor(objCollection) {

    new Validations(objCollection)

    new SampleController(objCollection)
    new SampleService(objCollection)

}



module.exports = ControllInterceptor;