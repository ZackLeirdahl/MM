/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},

		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Minneapolis,US',
				locationID: '5037649',  //ID from http://www.openweathermap.org
				appid: '0aaaa4198b00cf69fef971a748c74c92'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'Minneapolis,US',
				locationID: '5037649',  //ID from http://www.openweathermap.org
	            appid: '0aaaa4198b00cf69fef971a748c74c92'
			}
		},
		{
			module: 'stocks',
			position: 'bottom_left',
			config: {
				stocks: '.DJI,MSFT,AAPL,GOOG,INTC,CICS,TSLA,FB', // stock symbols
							updateInterval: 37000 // update interval in milliseconds
			}
		},
	        {
		    	module: 'MMM-Traffic',
		    	position: 'lower_third',
		    	classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
		    	config: {
		    		api_key: 'AIzaSyA-q_Os6zluaKUOVhocwgSsa8E02aW9IK0',
		    		mode: 'driving',
		    		origin: '2350 Timberwood Drive, Chanhassen, MN 55317',
		    		destination: '13490 Bass Lake Road, Maple Grove, MN 55311',
		    		arrival_time: '0800', //optional, but needs to be in 24 hour time if used.
		    		route_name: 'Home to Work',
		    		changeColor: true,
		    		showGreen: false,
		    		limitYellow: 5, //Greater than 5% of journey time due to traffic
		    		limitRed: 20, //Greater than 20% of journey time due to traffic
		    		traffic_model: 'pessimistic',
		    		interval: 120000 //2 minutes
	    	}
	    }
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
