'use strict';

eventsApp.controller('EventController',
		     function EventController($scope){
			 $scope.event = {
			     name: 'Tree Boot Camp',
			     date: '31/5/2013',
			     time: '10:30 am',
			     location:{
				 address: 'Gollum Headquarters',
				 city: 'Mount Doom',
				 province: 'CA'
			     },
			     imageUrl: 'img/angularjs-logo.png'
			 }
		     }
);
