eventsApp.factory('eventData', function(){
    return {
	event:  {
	    name: 'Tree Boot Camp',
	    date: 1359781015626,
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
		    duration: 1,
		    level: 'Advanced',
		    abstract: 'in this session you will learn about directives',
		    upVoteCount: 0
		    
		},
		{
		    name: 'Scopes for fun and profit',
		    creatorName: 'Will that',
		    duration: 2,
		    level: 'Intermediate',
		    abstract: 'in this session you will learn about scopes',
		    upVoteCount: 0
		},
		{
		    name: 'Well Behaved Controllers',
		    creatorName: 'Ang Le',
		    duration: 4,
		    level: 'Introductory',
		    abstract: 'in this session you will learn about scopes',
		    upVoteCount:0
		}
	    ]
	}
	
    };
    
});

