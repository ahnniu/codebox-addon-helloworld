define([], function() {
    var menu = codebox.require("core/commands/menu");
    var dialogs = codebox.require("utils/dialogs");

    menu.register("helloworld", {
        title: "Hello"
    }).menuSection({
        id: "helloworld.say",
        category: "Helloworld",
        title: "Say Hello!",
        action: function() {
            dialogs.alert("Hello World", "Hey, this is a message from an add-on!");
        }
    });
});
