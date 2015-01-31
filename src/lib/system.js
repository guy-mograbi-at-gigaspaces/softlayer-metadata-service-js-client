'use strict';

var logger = require('log4js').getLogger('system');

function SystemClient( config ){
    this.config = config;
}

/**
 * @typedef {object} SoftlayerDisk
 * @description the disk definition
 * @property {string} [tag] a tag name for disk.
 * @property {string} [type="SAN"] the type of the disk. one of "SAN" , "Local",  "SATA II". "SATA II" only if bare.
 * @property {string} [size="100 GB"] the size of the disk. "500 GB" only if bare.
 */

/**
 * @callback ApiCallback
 * @description aligns to : <a href="https://www.npmjs.com/package/request"> npm request's documentation </a>
 * @param {object} errors
 * @param {object} response
 * @param {string|object} body
 */

/**
 * @typedef {object} SystemQuota
 * @property {number} price_id price ID used to place order if needed
 * @property {number} price_rate hourly or monthly cost
 * @property {string} description
 */

/**
 * @typedef {object} SystemQuotaResponse
 * @property {string} errors errs message for te current operation
 * @property {SystemQuota} datacenters
 * @property {SystemQuota} cpu
 * @property {SystemQuota} ram
 * @property {SystemQuota} os
 * @property {SystemQuota} network
 * @property {Array<SystemQuota>} disks
 * @property {SystemQuota} remote
 * @property {SystemQuota} primary_ips
 * @property {SystemQuota} monitorings
 * @property {SystemQuota} responses
 * @property {SystemQuota} notifications
 * @property {SystemQuota} vpns
 * @property {SystemQuota} vulnerabilitys
 */


/**
 * @param {object} opts
 * @param {object} opts.credentials api credentials for softlayer
 * @param {string} opts.credentials.api_username
 * @param {string} opts.credentials.api_key
 * @param {string} opts.type type of hardware. One of "virtual_server" or "bare_metal_instance".
 * @param {string} [opts.billing_period="hourly"] one of "hourly" or "monthly"
 * @param {string} [opts.datacenter="wdc01"] pre-defined names of data centers.
 * "wdc01" or "Washington DC, 1"
 * "ams01", Amsterdam 1
 * "dal01", Dallas 1
 * "dal02", Dallas 2
 * "dal04", Dallas 4
 * "dal05", Dallas 5
 * "dal06", Dallas 6
 * "hkg02", Hong Kong 2
 * "lon02", London 2
 * "sea01", Seattle
 * "sng01", Singapore 1
 * "tor01", Toronto 1
 * @param {object} opts.cpu
 * @param {number} opts.cores number of cores
 * @param {boolean} [opts.private=false] a flag for private cores
 * @param {number} opts.ram amount of ram in GB
 * @param {object} opts.os
 * @param {string} opts.os.name os name one of "rhel" or "centos"
 * @param {string} [opts.os.version=7] major version number. only 5,6 or 7 for now
 * @param {string} [opts.os.bitness="64 bit"] os bit
 * @param {string} [opts.os.flavor="Minimal"] a template name for os. one of "Minimal","LAMP" for now.
 * @param {object} opts.network network configuration
 * @param {string} [opts.network.speed="1 Gbps"] speed of network connection. one of "100 Mbps", "1 Gbps", "10 Gbps"
 * @param {string} [opts.network.private_only=false] use private network only
 * @param {object} [opts.storage] storage/disks configuration.
 * @param {number} [opts.storage.max_disks=1] maximum number of disks
 * @param {Array<SoftlayerDisk>} [opts.storage.disks]
 * @param {string} [opts.primary_ip="1 IP Address"] primary IP address.
 * @param {string} [opts.remote="Reboot / Remote Console"] remote management
 * @param {string} [opts.monitoring="Host Ping"] monitoring category of softlayer API.
 * @param {string} [opts.response="Automated Notification"] response category of Softlayer API
 * @param {string} [opts.notification="Email and Ticket"] notification category of Softlayer API
 * @param {string} [opts.vpn="Unlimited SSL VPN Users & 1 PPTP VPN User"] VPN management category of Softlayer API
 * @param {string} [opts.vulnerability="Nessus Vulnerability Assessment & Reporting"] vulnerability assessments & management category of softlayer API.
 * @param {ApiCallback} callback body gets a {SystemQuotaResponse}
 */


SystemClient.prototype.quote = function( opts, callback  ){
    var myRequest = {
        'method' : 'POST',
        'url' : this.config.endpoint + '/quote/system',
        'headers' : this.config.auth,
        'json': true,
        'body' : opts
    };
    logger.trace(myRequest);
    this.config.request(
        myRequest
        ,
        callback
    )
};



module.exports = SystemClient;