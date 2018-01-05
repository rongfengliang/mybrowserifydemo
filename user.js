var domify = require('domify');
var html =require("./user.html");
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;
//var html = fs.readFileSync(__dirname + '/user.html', 'utf8');
inherits(Widget, EventEmitter);
module.exports = Widget;
function Widget (opts) {
    if (!(this instanceof Widget)) return new Widget(opts);
    this.element = domify(html);
}
Widget.prototype.appendTo = function (target) {
    if (typeof target === 'string') target = document.querySelector(target);
    target.appendChild(this.element);
    this.emit('append', target);
};