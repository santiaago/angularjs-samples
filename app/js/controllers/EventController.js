'use strict';

eventsApp.controller('EventController',
		     function EventController($scope, eventData, $anchorScroll){
			 $scope.snippet = '<span style="color:red">hi there</span>';
			 $scope.boolValue = true;
			 $scope.mystyle = {color:'red'};
			 $scope.myclass = "blue";
			 $scope.buttonDisabled = true;
			 $scope.sortorder = 'name';//dash is for descendingupVoteCount';
			 //-1 demo with call back function
			 //$scope.event = eventData.event;
			 // eventData.getEvent(function(event){ 
			 //     $scope.event = event;
			 // });
			 //-2 demo with promises using $http and $q
			 // $scope.event = eventData.getEvent();			 
			 // $scope.event.then(function(event){
			 //     console.log("event controller event promise event part");
			 //    console.log(event); 
			 // }, function(status){
			 //     console.log("event controller event promise status part");
			 //     console.log(status);
			 // });
			 // console.log($scope.event);
			 //-3 demo with $resources and promeses
			 $scope.event = eventData.getEvent();
			 $scope.event.then(
			     function(event){console.log(event);},			     
			     function(response){console.log(response);}
			 );
			 
			 $scope.upVoteSession = function(session,event){
			     console.log(event);
			     console.log($scope.event);
			     session.upVoteCount++;
			 };
			 
			 $scope.downVoteSession = function(session){
			     session.upVoteCount--;
			 };
			 
			 $scope.scrollToSession = function(){
			     $anchorScroll();
			 };
		     }
);
