define([], function() {
    var commands = codebox.require("core/commands");
    var dialogs = codebox.require("utils/dialogs");

    commands.register("helloworld.sayhello", {
        title: "Hello World!",
        icon: "comment"
    }, function() {
        dialogs.alert("Hello World", "Hey, this is a message from an add-on!");
    });
});
