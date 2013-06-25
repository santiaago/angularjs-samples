 'use strict';

eventsApp.controller('MainMenuController',
		     function MainMenuController($scope, $location){
			 console.log('MainMenuController call:');
			 $scope.createEvent = function(){
			     console.log('createEvent call:');
			     // Create event 2 does not work unless you set 
			     //$locationProvider to html5mode(True)
			     $location.url('/newEvent');
			     console.log(document.URL);
			     console.log('absUrl:', $location.absUrl());
			     console.log('protocol:', $location.protocol());
			     console.log('port:', $location.port());
			     console.log('host:', $location.host());
			     console.log('path:', $location.path());
			     console.log('search:', $location.search());
			     console.log('hash:', $location.hash());
			     console.log('url:', $location.url());
			     console.log('createEvent done!');
			 };
		     }
);
