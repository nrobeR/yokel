'use strict';

angular.module('yokelApp')
  .config(function($stateProvider){
    $stateProvider
      .state('template', {
        url: '/template', //maybe template ID?
        templateUrl: './app/template/template.html',
      });
  });
