// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('yokelApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider
    .otherwise('/');
  // $locationProvider.html5Mode(true);
})

.run(function($ionicPlatform, $location) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $location.path('/splash');
  });
})

.controller('HomeRouter', function($scope, $location){
  
  $scope.tapToSplash = function(){
      $location.path('/splash');
  };

  $scope.tapToHome = function(){
      $location.path('/home');
  };

});
