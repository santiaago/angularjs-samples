'use strict';

eventsApp.controller('EditEventController',
		     function EditEventController($scope, eventData){
			 
			 $scope.event = {};
			 
			 $scope.saveEvent = function(event, newEventForm){
			     console.log(newEventForm);
			     if(newEventForm.$valid){
				 //window.alert('event ' + event.name + ' save');
				 console.log('edit event controller save');
				 eventData.save(event)
				     .then(
					 function(response){console.log('success',response)},
					 function(response){console.log('failure',response)}
				     );
			     }
			 };
			 
			 $scope.cancelEdit = function(){
			     window.location = "/EventDetails.html";
			 };
		     }
);
