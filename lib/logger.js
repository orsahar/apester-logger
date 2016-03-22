var winston = require('winston'),
    uuid    = require('uuid');

function genrateLogger (fileName, logPath){

    logPath = logPath || '/home/deploy/.forever/';

    var logger = new (winston.Logger)({

        transports: [

            new (winston.transports.File)({

                filename: logPath + fileName + '-info.apester.log',

                name: fileName + '-info',

                level: 'info'

            }),

            new (winston.transports.File)({

                filename: logPath + fileName + '-error.apester.log',

                name: fileName + '-error',

                level: 'error'

            })

        ]

    });


    return logger;
}

function idGenerator(){
    return uuid.v4();
}

function filterData(request, id){

    var data      = {} ;

    data.id = id;
    data.referrer    = request.headers.referrer ;
    data.host        = request.headers.host ;
    data.method      = request.method ;
    data.userAgent   = request.headers['user-agent'];
    data.baseUrl     = request.baseUrl;
    data.originalUrl = request.originalUrl;
    data.sequenceId  = id;

    return data;
}

module.exports = {
    log : genrateLogger,

    filterData : filterData,

    getLogSequenceId : idGenerator
};
