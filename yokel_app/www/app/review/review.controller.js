'use strict';

angular.module('yokelApp')

.controller('ReviewController', function($scope,GestureFunc){
  $scope.state = "review";
  $scope.onSwipeRight = GestureFunc.onSwipeRight;
});
