'use strict';

angular.module('yokelApp')
  .config(function($stateProvider){
    $stateProvider
      .state('splash', {
        url: '/', //maybe splash ID?
        templateUrl: './app/splash/splash.html',
      });
  });
