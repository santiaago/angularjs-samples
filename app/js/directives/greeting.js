'use strict'

eventsApp.directive('greeting', function(){
    return {
	restrict: 'E',
	replace: true,
	template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
	controller: 'GreetingController'
    };
});

eventsApp.controller('GreetingController',
		    function GreetingController($scope){
			$scope.sayHello = function(){
			    alert('Hello');		
			}
		    });
		    
