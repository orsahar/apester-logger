var winston = require('winston');

function generateMetaData(req){
    return req;
}

module.exports = function(fileName){

    var logger = function(req) {

        var metaData = generateMetaData(req);

        new (winston.Logger)({

            transports: [

                new (winston.transports.File)({

                    filename : 'logs/' + fileName + '-info.apester.log',

                    name     : fileName + '-info',

                    level    : 'info'

                }),

                new (winston.transports.File)({

                    filename : 'logs/' + fileName + '-error.apester.log',

                    name     : fileName + '-error',

                    level    : 'error'

                })

            ]
            ,
            data     : metaData
        });
    };

    return logger;
};
