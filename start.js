const  app = require("./user.js");
const  main = app({});
const shortid = require("shortid");
const  angular = require("angular");
main.on('append', function (target) {
    console.log('appended to: ' + target.outerHTML);
});
const ngapp = angular.module("demoapp",[]);
ngapp.controller("democtrl",["$scope",function($scope){
  $scope.username="dalongdmeo";
  $scope.clickdemo=function(){
     $scope.username=shortid.generate();
  }
}])
main.appendTo(".demoap")
const index = require("./approng");
