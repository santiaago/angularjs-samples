'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource', 'ngCookies'])
    .config(function($routeProvider, $locationProvider){
	$routeProvider.when('/newEvent',
			    {
				templateUrl: 'templates/NewEvent.html',
				controller: 'EditEventController'
			    });
	$routeProvider.when('/events',
			    {
				templateUrl: 'templates/EventList.html',
				controller: 'EventListController',
			    });
	$routeProvider.when('/event/:eventId',
			    {
				foo: 'bar',
				templateUrl: 'templates/EventDetails.html',
				//if you use template instead of templateUrl and pass it a string 
				// that is what will be displayed.
				controller: 'EventController',
				//wait till I get the view.
				// resolve: {
				//     event: function($q, $route, eventData){
				// 	var deferred = $defer();
				// 	eventData.getEvent($route.current.pathParams.eventId)
				// 	    .then(function(event){deferred.resolve(event);});
				// 	return deferred.promise;
				//     }
				// }
			    });
	//$routeProvider.otherwise({redirectTo: '/events'});
	$routeProvider.when('/sampleDirective',
			    {
				templateUrl: 'templates/SampleDirective.html',
				controller: 'SampleDirectiveController'
			    });
	//$locationProvider.html5Mode(true);

    })
    .factory('myCache', function($cacheFactory){
	return $cacheFactory('myCache', {capacity:3})
	});
