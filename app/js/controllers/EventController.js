'use strict';

eventsApp.controller('EventController',
		     function EventController($scope, eventData){
			 $scope.snippet = '<span style="color:red">hi there</span>';
			 $scope.boolValue = true;
			 $scope.mystyle = {color:'red'};
			 $scope.myclass = "blue";
			 $scope.buttonDisabled = true;
			 $scope.sortorder = 'name';//dash is for descendingupVoteCount';
			 //$scope.event = eventData.event;
			 // eventData.getEvent(function(event){ 
			 //     $scope.event = event;
			 // });
			 $scope.event = eventData.getEvent();
			 $scope.event.then(function(event){
			     console.log("event controller event promise event part");
			    console.log(event); 
			 }, function(status){
			     console.log("event controller event promise status part");
			     console.log(status);
			 });
			 console.log($scope.event);
			 $scope.upVoteSession = function(session,event){
			     console.log(event);
			     console.log($scope.event);
			     session.upVoteCount++;
			 };
			 $scope.downVoteSession = function(session){
			     session.upVoteCount--;
			 };
		     }
);
