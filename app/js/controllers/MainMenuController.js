 'use strict';

eventsApp.controller('MainMenuController',
		     function MainMenuController($scope, $location){
			 console.log('MainMenuController call:');
			 $scope.createEvent = function(){
			     console.log('createEvent call:');
			     $location.url('#/newEvent');
			     console.log(document.URL);
			     $scope.$$phase || $scope.$apply();
			     //$scope.$apply();
			     
			     console.log('createEvent done!');
			 };
		     }
);
