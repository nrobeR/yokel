'use strict';

angular.module('yokelApp')
  .config(function($stateProvider){
    $stateProvider
      .state('business', {
        url: '/business', //maybe business ID?
        templateUrl: './app/business/business.html',
      });
  });
