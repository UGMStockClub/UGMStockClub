import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias:{
			'@ugm-stock-club/supabase-client': path.resolve('../../packages/supabase-client/src')
		}
	}
};

export default config;
