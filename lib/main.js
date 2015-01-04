var Q = require("q");
var _ = require("lodash");

var rpc = require("./rpc");

module.exports = function(codebox) {
    codebox.logger.log("start helloworld services");

    codebox.rpc.service("hello", rpc);
};