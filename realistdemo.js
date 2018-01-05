var realist = require('realist');
var table = require("text-table");
var options = {
    'force': ['f', 'force'],
    'ignore': ['i', 'ig', 'ignore']
}

var handler = function(ops,name) { 
    console.log(ops,name);
};
var commands = {
    // Show options, if name is given -> dump single option 
    'show [option-name]': function(opt, name) {
        if (name) {
            console.log(opt[name]);
        } else {
            console.log(opt);
        }
    }
};
var options = {
	locale: ['l', 'locale']
};

var events = {
	'option help': commands
};
realist(handler,options, events);