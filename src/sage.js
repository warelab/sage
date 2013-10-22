var Service  = require("./service");
var Resource = require("./resource");
var Registry = require("./registry");

/**
 * @class Sage
 * The toplevel class.
 * 
 * @singleton
 */
module.exports = {
    /** @property {Service} Service The service class. */
    Service:  Service,

    /** @property {Resource} Resource The resource class. */
    Resource: Resource,

    /** @property {Registry} Registry The registry object. */
    Registry: Registry
};