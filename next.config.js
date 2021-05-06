const withImages = require('next-images');

module.exports = withImages({
	async redirects() {
		return [
			{
				source: '/together',
				destination: 'https://flytogethergame.com',
				permanent: true
			}
		]
	}
});
