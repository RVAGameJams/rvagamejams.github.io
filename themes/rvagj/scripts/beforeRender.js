const axios = require('axios');

hexo.extend.filter.register('before_generate', function() {
	// console.log('fetching something before generate...');
	// return axios.get('http://slowwly.robertomurray.co.uk/delay/1000/url/http://textfiles.com/uploads/bannerhack.txt')
	// 	.then(res => {
	// 		console.log(res.data);
	// 		hexo.post.create({
	// 			title: 'test',
	// 			content: res.data,
	// 			path: 'games/test',
	// 		}, true);
	// 	})
	// 	;
});