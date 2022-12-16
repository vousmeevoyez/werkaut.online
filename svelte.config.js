// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	kit: {
		adapter: adapter(),
		alias: {
			$i18n: 'src/i18n',
			$lib: 'src/lib'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/werkaut.online' : ''
		}
	},
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	]
};

export default config;
