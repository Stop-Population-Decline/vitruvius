import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ten Books',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Research Notes',
					autogenerate: { directory: 'research' },
				},
			],
			customCss: ['./src/tailwind.css'],
			defaultLocale: 'en',
			locales: {
			  en: {
				label: 'English',
			  },
			  ja: {
				label: 'Japanese',
			  },
			},
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
