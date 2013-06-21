'use strict';

eventsApp.controller('EventController',
		     function EventController($scope, eventData, $anchorScroll, $routeParams, $route){
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
			 
			 $scope.event = eventData.getEvent($routeParams.eventId);
			 $scope.event.then(
			     function(event){console.log(event);},			     
			     function(response){console.log(response);}
			 );
			 //route params and accessing properties through route
			 console.log('EventController.js: testing routeParams', $routeParams.eventId);
			 console.log('accessing properties defined in the route:');
			 console.log('property foo value: ',$route.current.foo);
			 //access params with the following 
			 //index.html#/event/2?foo=foobar
			 console.log('param foo value: ',$route.current.params.foo);
			 console.log('eventId through route.current.params.eventId value: ',$route.current.params.eventId);
			 //console.log('foo through route.current.pathParams.foo value:', $route.current.pathParms.foo);

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
			 
			 $scope.reload = function(){
			     console.log('EventController: reload() from route')
			     $route.reload();
			 };
		     }
);
