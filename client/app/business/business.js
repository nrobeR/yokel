'use strict';

angular.module('yokelApp')
  .config(function($stateProvider){
    $stateProvider
      .state('business', {
        url: '/business/:place_id',
        templateUrl: 'app/business/business.html',
        controller: 'BusinessController',
        resolve: { resolveData: resolveData }
      });
      function resolveData($http, $stateParams){
        var businessId = $stateParams.place_id;
        return $http({
          method: 'GET',
          url: 'api/businesses/'+businessId,
        }).success(function(business){
          return business;
        });
      }
  });
