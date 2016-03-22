var winston = require('winston');


module.exports = function(fileName){

        var logger =  new (winston.Logger)({

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

        });



        return logger;
};
