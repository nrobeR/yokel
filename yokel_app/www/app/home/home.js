'use strict';

angular.module('yokelApp')
  .config(function($stateProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './app/home/home.html',
      });
  })

  .factory('PopupButton', function($ionicPopup, $location){
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
            $location.path('/business');
          } else {
            console.log('You are not sure');
          }
        });
      }
    }
  });
