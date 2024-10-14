const responseMsgs = require('./responseMsgs')

const errorHandler = (res, er)=>{
    let errorResult;

    if(er.message) {
        errorResult = er.message.split(',')
    } else if (er.errors[0]) {
        errorResult = er.errors.map((e)=>e.msg)
    } else {
        errorResult = [er]
    }

    res.status(400).json({
        status : responseMsgs.FAIL,
        data : errorResult
    })
}

module.exports = errorHandler
