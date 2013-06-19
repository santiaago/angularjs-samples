'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource'])
    .factory('myCache', function($cacheFactory){
	return $cacheFactory('myCache', {capacity:3})
	});
