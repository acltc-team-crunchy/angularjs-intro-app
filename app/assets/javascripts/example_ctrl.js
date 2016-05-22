(function () {
  "use strict";
  angular.module("app").controller("exampleCtrl", function($scope) {

    $scope.messages = ["hello world!", "Good afternoon", "goodbye"];

    $scope.alertMe = function(message) {
      alert(message);
    }


  });
})();