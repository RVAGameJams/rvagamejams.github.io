const moment = require('moment')
const _ = require('lodash')

// constants
global.DATE_FORMAT = 'M/D/YYYY h:mmA'

// lists
global.getEvents = (site) => _.chain(site.posts.data)
	.filter(post => post.tags.filter(tag => tag.name == 'event').length)
	.sortBy(post => moment(post.start || post.date, DATE_FORMAT).valueOf())
	.value()

// util
global.getGoogleMapsUrl = str => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(str)}`
global.getGoogleCalendarUrl = (title, location, description, start, end) => `http://www.google.com/calendar/event?action=TEMPLATE&dates=${start.utc().format('YYYYMMDDTHHmmss')}Z%2F${end.utc().format('YYYYMMDDTHHmmss')}Z&text=${encodeURIComponent(title + ' - RVA Game Jams')}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(description)}`