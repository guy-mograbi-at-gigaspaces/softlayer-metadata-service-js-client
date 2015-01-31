var Client = require('../../').Client;

var config = require('../../dev/test.json');
var _ = require('lodash');
var logger = require('log4js').getLogger('TestClient');

var client = new Client( config.clientOpts );


client.system.quote(
    _.merge({
        'type' : 'virtual_server',
        'datacenter' : 'hkg02'
    }, config.requestOpts ),
    function( error, response, body ){
        if ( !!error ){
            logger.error('error while running system quote', error);
        }else if ( !!body ) {
            logger.info('got response body', body);
        }else{
            logger.trace(response);
        }

    }

);