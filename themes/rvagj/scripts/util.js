console.log('util')
// lists
global.getEvents = (site) => site.posts.data.filter(post => post.tags.filter(tag => tag.name == 'event').length)

// util
global.DATE_FORMAT = 'M/DD/YYYY h:mmA'
global.getGoogleMapsUrl = str => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(str)}`
global.getGoogleCalendarUrl = (title, location, description, start, end) => `http://www.google.com/calendar/event?action=TEMPLATE&dates=${start.utc().format('YYYYMMDDTHHmmss')}Z%2F${end.utc().format('YYYYMMDDTHHmmss')}Z&text=${encodeURIComponent(title + ' - RVA Game Jams')}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(description)}`