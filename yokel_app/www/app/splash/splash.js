'use strict';

angular.module('yokelApp')
  .config(function($stateProvider){
    $stateProvider
      .state('splash', {
        url: '/splash', //maybe splash ID?
        splashUrl: './app/splash/splash.html',
      });
  });
