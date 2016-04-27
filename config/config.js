/* Magic Mirror Config
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
    port: 8080,

    language: 'en',
    timeFormat: 24,
    units: 'metric',

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
            header: 'German Holidays',
            position: 'top_left',
            config: {
                calendars: [
                    {
                        symbol: 'calendar-check-o ',
                        url: 'webcal://www.calendarlabs.com/templates/ical/Germany-Holidays.ics'
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
                appid: 'a4739f8834ed58759d4d3adc7ae7ff8c'
            }
        },
        {
            module: 'newsfeed',
            position: 'bottom_bar',
            config: {
                feeds: [
                    {
                        title: "Spiegel Online",
                        url: "http://www.spiegel.de/schlagzeilen/tops/index.rss"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true
            }
        },
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
