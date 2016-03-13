'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

phonecatServices.factory('Player', ['$resource',
  function($resource){
    return $resource('http://localhost:3000/players', {}, {
      query: {method:'GET', params:{api_key:'mihai'}, isArray:true}
    });
  }]);

