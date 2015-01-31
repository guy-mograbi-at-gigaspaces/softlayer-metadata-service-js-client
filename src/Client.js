
/**
 * @typedef {object} AppConfig
 * @description
 * A configuration object for the client
 * @property  {object} auth authentication details provided by the service's team
 * @property {string} auth.client_key client key required by the service
 * @property {string} auth.client_secret client secret required by the service
 * @property {string} [endpoint=​https://metadata.imdemocloud.com/softlayer] the service's endpoint
 */

/**
 *
 * @param {AppConfig} config
 */

var request = require('request');
var System = require('./lib/system');

module.exports = function( config ){

    if ( !config.endpoint ){
        config.endpoint = '​https://metadata.imdemocloud.com/softlayer';
    }

    config.request = request;

    this.config = config;
    this.system = new System(config);
};
