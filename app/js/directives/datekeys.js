'use strict'

eventsApp.directive('dateKeys', function(){
    return {
	restrict: 'A',
	link: function(scope,element,attrs,controller){
	    element.on('keydown', function(event){
		console.log("link")
		if(isNumericKeyCode(event.keyCode)
		   || isForwardSlashKeyCode(event.keyCode)
		   || isNavigationKeyCode(event.keyCode)){
		    return true;
		}
		return false;
	    });
	}
    }

    function isNumericKeyCode(keyCode){
	console.log((keyCode >= 48 && keyCode <=57)
	    || (keyCode >= 96 && keyCode <= 105));
	return (keyCode >= 48 && keyCode <=57)
	    || (keyCode >= 96 && keyCode <= 105);
    }
    function isForwardSlashKeyCode(keyCode){
	console.log(keyCode==191)
	return keyCode == 191;
    }
    function isNavigationKeyCode(keyCode){
	switch(keyCode){
	    case 8: //backspace
	    case 35: //end
	    case 37: //left
	    case 38: //up
	    case 39: //right
	    case 40: //down
	    case 45: //ins
	    case 46: //del
	    console.log(true)
	    return true;
	    default:
	    console.log(false)
	    return false;
	}
    }
});
