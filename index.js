var url = require('url')
var appdemo = require("querystring");
var appname= appdemo.parse("appname=dalong&age=333");
var str = require('./README.md');
var styles = require("./app.css")
//var states = require('./app.csv');
var div = `<div class="${styles.body}"> dalong ...</div>`;
var html = require('./html/base.html');

//document.body.appendChild(str);
var variables ={
    host: url.parse(window.location.href),
    appnameinfo:appname.appname,
    appageinfo:appname.age,
    me:str
}
//document.body.innerHTML = JSON.stringify(variables)
document.body.innerHTML = html;

// var angular = require('angular');
// require('angular-ui-router');
// angular.module('myApp', [
//   'ui.router',
//   require('./home.html') // it exports the name of the generated angular module: 'home.html'
// ]).config(function($stateProvider){
//   $stateProvider.state('home', {
//     url: '/',
//     templateUrl: 'home.html' // this is the template identifier that's put in angulars $templateCache
//   });
// });