'use strict';

eventsApp.directive('mySample', function($compile){
    console.log('directive my sample');
    return {
	//restrict: 'E',
	//template: "<input type='text' ng-model='sampleData' /> {{sampleData}}</br>";
	link: function(scope, element, attrs, controller){
	    console.log('directive link function');
	    var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}</br>";
	    angular.element(element).html($compile(markup)(scope));
	}
    };
});
