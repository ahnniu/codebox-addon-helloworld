var HelloService = function() {
    this.lang = "en";
    this.langs = {
        'en': "Hello",
        'fr': "Bonjour"
    };

    // Method starting with _ are not accessible using rpc
    this._getMessage = funciton(name, lang) {
        lang = lang || this.lang;
        return this.langs[lang]+" "+name;
    };

    this.say = function(args) {
        if (!args.name) {
            throw new Error("Need argument 'name'");
        }
        return {
            'message': this._getMessage(args.name, args.lang);
        };
    };

    this.lang = function(args) {
        if (!args.lang) {
            throw new Error("Need argument 'lang'");
        }
        if (!this.langs[args.lang]) {
            throw new Error("Invalid lang: "+args.lang);
        }
        this.lang = args.lang;
        return {
            'lang': this.lang
        };
    };
};


module.exports = HelloService;