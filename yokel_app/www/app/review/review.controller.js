'use strict';

angular.module('yokelApp')

.controller('ReviewController', function($scope,$state,$ionicPopup,GestureFunc){
  $scope.state = "review";
  $scope.onSwipeRight = GestureFunc.onSwipeRight;
  $scope.comments = '';
  $scope.submitComments = function(){
    $ionicPopup.alert({
      title: 'Submitted',
      template: 'Thanks for you reviews!',
      buttons:[{text:'Okay',type: 'button button-calm'}]
    }).then(function(res) {
      $state.go('business',$scope.comments);
    });
  };

  $scope.rate = 3;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
});
