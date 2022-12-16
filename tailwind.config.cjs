// import konstaConfig config
const konstaConfig = require('konsta/config');

// wrap config with konstaConfig config
module.exports = konstaConfig({
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media', // or 'class'
	theme: {
		extend: {
			backgroundImage: {
				deadlift: 'url("/images/deadlift.webp")'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
});
