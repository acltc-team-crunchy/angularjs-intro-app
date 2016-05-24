(function () {
  "use strict";
  angular.module("app").controller("exampleCtrl", function($scope) {

    $scope.reviews = [
      {
        text: "I love angular!",
        rating: 5
      },
      {
        text: "It's the best!",
        rating: 4
      },
      {
        text: "I hate it! It's stupid!",
        rating: 1
      }
    ];

    $scope.addReview = function(reviewText, rating) {
      $scope.reviews.push({text: reviewText, rating: rating});
    }



    window.$scope = $scope;
  });
})();