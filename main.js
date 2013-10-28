define([], function() {
    var commands = require("core/commands");
    var dialogs = require("utils/dialogs");

    commands.register("helloworld.sayhello", {
        title: "Hello World!",
        icon: "comment"
    }, function() {
        dialogs.alert("Hello World", "Hey, this is an extension!");
    });
});
