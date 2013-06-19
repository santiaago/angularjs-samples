 'use strict';

eventsApp.controller('LocaleSampleController',
		     function LocaleSampleController($scope, $locale){
			 
			 $scope.myDate = Date.now();
			 $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
		 	 $scope.myShortFormat = $locale.DATETIME_FORMATS.shortDate;
		     }
 );
