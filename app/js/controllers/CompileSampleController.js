 'use strict';

eventsApp.controller('CompileSampleController',
		     function CompileSampleController($scope, $compile, $parse){

			 console.log('parse demo');
			 //-1
			 var fn = $parse('1+2');
			 console.log(fn());
			 //-2
			 var getter = $parse('event.name');

			 var context1 = {event: {name: 'AngularJS Boot Camp'}};
			 var context2 = {event: {name: 'Code Camp'}};

			 console.log(getter(context1));
			 console.log(getter(context2));
			 //-3
			 console.log(getter(context2,context1));
			 //-4
			 var setter = getter.assign;
			 setter(context2, 'Code Retreat');
			 console.log(context2.event.name);

			 console.log('parse demo done!')

			 $scope.appendDivToElement = function(markup){
			     return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
			 }
		     }
);
