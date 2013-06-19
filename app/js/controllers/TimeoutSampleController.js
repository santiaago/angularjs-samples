 'use strict';

eventsApp.controller('TimeoutSampleController',
		     function TimeoutSampleController($scope, $timeout){

			 // angular set timeout
			 var promise = $timeout(function(){
			     $scope.name = "John Doe";
			 }, 3000);

			 //javascript set timeout
			 //date do not change until you write something in the text box
			 // setTimeout(function(){
			 //     $scope.name = "John Doe";
			      
			 // }, 3000);

			 $scope.cancel = function(){
			     $timeout.cancel(promise);
			 };
			 
		     }
 );
