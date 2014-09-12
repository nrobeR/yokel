'use strict';

angular.module('yokelApp')

.factory('PopupButton', function($ionicPopup){
  return {
    showConfirm: function(name){
      console.log(name);
      if(name === 'City Pub'){
        console.log(name);

        //custom text for City Pub
        var confirmPopup = $ionicPopup.confirm({
          title: 'Sad Bar',
          template: 'Are you sure you want to drown your sorrows at Sad Bar?'
        });
      } else {
        
        //default text for places
        var confirmPopup = $ionicPopup.confirm({
          title: name,
          template: 'Go to ' + name + '?'
        });
      }

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    }
  }
})

.controller('HomeController', function($scope){
  $scope.state = "home";
})

.controller('SearchController', function($scope){
  $scope.submit = function(value){
    console.log($scope.value);
  }
})

.controller('PopupCtrl', function($scope, PopupButton, $timeout){
  $scope.showConfirm = PopupButton.showConfirm

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
