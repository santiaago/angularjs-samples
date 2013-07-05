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
			var greetings = ['hello'];
			$scope.sayHello = function(){
			    alert(greetings.join());		
			}
			this.addGreeting = function(greeting){
			    greetings.push(greeting);
			}
		    });

eventsApp.directive('finnish', function(){
    return {
	retrict: 'A',
	require: 'greeting',
	link: function(scope, element, attrs, controller){
	    controller.addGreeting('hei');
	}
    }
});

eventsApp.directive('hindi', function(){
    return {
	retrict: 'A',
	require: 'greeting',
	link: function(scope, element, attrs, controller){
	    controller.addGreeting('namasti');
	}
    }
});


