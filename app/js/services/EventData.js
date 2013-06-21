'use strict'

eventsApp.factory('eventData', function($resource, $q){
    var resource = $resource('data/event/:id.json', {id: '@id'});
    return {
	getEvent:function()  {
	    var deferred = $q.defer();
	    resource.get({id:1},
		     function (event){
			 deferred.resolve(event);
		     },
		     function (response){
			 deferred.reject(response);
		     });
	    return deferred.promise;
	},
	save: function(event){
	    console.log('event data save.');
	    var deferred = $q.defer();
	    event.id = 999;
	    resource.save(event,
			       function(response){deferred.resolve(response);},
			       function(response){deferred.reject(response);}
			 );
	    console.log('event data save done!');
	    return deferred.promise;
	},
	getAllEvents: function(event){
	    console.log('event data getAllEvents.');
	    return resource.query(); 
	}
    };
});

// for demo of $http, $q and $log
// eventsApp.factory('eventData', function($http, $log, $q){
//     return {
// 	getEvent:function(/*successcb*/)  {
// 	    var deferred = $q.defer();
// 	    $http({method: 'GET', url:'/data/event/1.json'}).
// 		success(function(data,status,headers,config){
// 		    deferred.resolve(data);
// 		    $log.info(data, status, headers() ,config);
// 		    //successcb(data);
// 		}).
// 		error(function (data, status, headers, config){
// 		    $log.warn(data, status, headers(), config);
// 		    deferred.reject(status);
// 		});
// 	    return deferred.promise;
// 	}
//     };
// });
