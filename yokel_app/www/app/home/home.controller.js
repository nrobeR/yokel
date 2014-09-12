'use strict';

angular.module('yokelApp')

.controller('HomeController', function($scope){
  $scope.state = "home";
})

.controller('SearchController', function($scope){
  $scope.submit = function(value){
    console.log($scope.value);
  }
})

.controller('PopupCtrl', function($scope, PopupButton, $timeout){
  $scope.showConfirm = PopupButton.showConfirm;

  $scope.tempData = {
    1: {
      name: 'City Pub',
      description: 'Sad Bar',
      distance: '0.1 miles'
    },

    2: {
      name: 'Mikkeller',
      description: 'Happy Bar',
      distance: '0.1 miles'
    },

    3: {
      name: 'The Chieftain',
      description: 'Irish Pub',
      distance: '0.3 miles'
    }
  };

});
