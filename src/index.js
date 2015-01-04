define([], function() {
    var _ = codebox.require("hr/utils");
    var commands = codebox.require("core/commands");
    var dialogs = codebox.require("utils/dialogs");
    var rpc = codebox.require("core/rpc");

    // Cached methods
    var hello = _.memoize(function() {
        return rpc.execute("hello/say", {
            "name": "Niu",
            "lang": "en"
        }).then(function(message) {
            return message;        
        });
    });

    // About dialog
    commands.register({
        id: "helloworld.hello",
        title: "HelloWorld: Hello",
        run: function() {
            return hello()
            .then(function(message) {
                return dialogs.alert("Codebox says: "+ message.message);
            });
        }
    });

  
});