/* exported config */

/* Magic Mirror Config
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'de',
	timeFormat: 24,

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
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Schondra',
				appid: 'a4739f8834ed58759d4d3adc7ae7ff8c'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'Schondra',
	            appid: 'abf8ee9c8ddb8123f579247987b94d8f'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feedUrl: 'http://www.spiegel.de/schlagzeilen/tops/index.rss',
				showPublishDate: true,
			}
		},
	]

};


/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
