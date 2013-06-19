 'use strict';

eventsApp.controller('CompileSampleController',
		     function CompileSampleController($scope, $compile){

			 $scope.appendDivToElement = function(markup){
			     return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
			 }
		     }
);
