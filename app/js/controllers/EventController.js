'use strict';

eventsApp.controller('EventController',
		     function EventController($scope){
			 $scope.event = {
			     name: 'Tree Boot Camp',
			     date: '31/5/2013',
			     time: '10:30 am',
			     location:{
				 address: 'Gollum Headquarters',
				 city: 'Mount Doom',
				 province: 'CA'
			     },
			     imageUrl: 'img/angularjs-logo.png',
			     sessions: [
				 {
				     name: 'Directives Masterclass',
				     creatorName: 'Bob this',
				     duration: '1 hr',
				     level: 'Advanced',
				     abstract: 'in this session you will learn about directives',
				     upVoteCount: 0

				 },
				 {
				     name: 'Scopes for fun and profit',
				     creatorName: 'Will that',
				     duration: '3 hr',
				     level: 'Intermediate',
				     abstract: 'in this session you will learn about scopes',
				     upVoteCount: 0
				 },
				 {
				     name: 'Well Behaved Controllers',
				     creatorName: 'Ang Le',
				     duration: '2 hr',
				     level: 'Introductory',
				     abstract: 'in this session you will learn about scopes',
				     upVoteCount:0
				 }
			     ]
			 }
			 $scope.upVoteSession = function(session){
			     session.upVoteCount++;
			 };
			 $scope.downVoteSession = function(session){
			     session.upVoteCount--;
			 };
		     }
);
