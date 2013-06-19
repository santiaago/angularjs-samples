'use strict'

eventsApp.factory('$exceptionHandler', function(){
    // override angular exception by our own
    return function(exception){
	console.log("exception handled: " + exception.message);
    };

});
