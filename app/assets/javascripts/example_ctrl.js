(function () {
  "use strict";
  angular.module("app").controller("exampleCtrl", function($scope) {

    $scope.messages = ["hello world!", "Good afternoon", "goodbye"];

    $scope.addMessage = function(message) {
      $scope.messages.push(message);
    }



    window.$scope = $scope;
  });
})();