'use strict';

eventsApp.controller('EventController',
		     function EventController($scope, eventData){
			 $scope.snippet = '<span style="color:red">hi there</span>';
			 $scope.boolValue = true;
			 $scope.mystyle = {color:'red'};
			 $scope.myclass = "blue";
			 $scope.buttonDisabled = true;
			 $scope.sortorder = 'name';//dash is for descendingupVoteCount';
			 $scope.event = eventData.event;
			 $scope.upVoteSession = function(session){
			     session.upVoteCount++;
			 };
			 $scope.downVoteSession = function(session){
			     session.upVoteCount--;
			 };
		     }
);
