var winston = require('winston');

function genrateLogger (fileName){
    var logger = new (winston.Logger)({

        transports: [

            new (winston.transports.File)({

                filename: 'logs/' + fileName + '-info.apester.log',

                name: fileName + '-info',

                level: 'info'

            }),

            new (winston.transports.File)({

                filename: 'logs/' + fileName + '-error.apester.log',

                name: fileName + '-error',

                level: 'error'

            })

        ]

    });


    return logger;
}

function filterData(request){

    var data      = {} ;

    data.referrer    = request.headers.referrer ;
    data.host        = request.headers.host ;
    data.method      = request.method ;
    data.userAgent   = request.headers.user-agent;
    data.baseUrl     = request.baseUrl;
    data.originalUrl = request.originalUrl;

    return data;
}

module.exports = {
    log :genrateLogger,

    filterData : filterData
};
