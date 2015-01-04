var say = function(args) {
    var message = "Hello " + args.name;
    return {'message': message};
};

module.exports = {
    'say': say
};