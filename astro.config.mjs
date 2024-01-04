import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vitruvius',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{ label: 'Stop Population Decline (SPD)', link: 'https://stoppopulationdecline.org' },
				{ label: 'About SPD', link: 'https://stoppopulationdecline.org/about' },
				{
					label: 'Research Notes',
					autogenerate: { directory: 'research' },
				},
			],
			head: [{
				tag: 'meta',
				attributes: {
					name: 'ahrefs-site-verification',
					content: '43e11f8b01ac09eae0c1d5137e5472c4fbc683844b5349b3aaa4efc23d3fb0b2',
				}
			},
			{ tag: 'meta', attribute: { name: "google-site-verification", content: "JcdPH-8wgLFOXHDEMQ_zLE2mj7pUy9OgDzzQxNBAo1Q" } }
			],
			customCss: ['./src/tailwind.css'],
			defaultLocale: 'root', // optional
			locales: {
				root: {
					label: 'English',
					lang: 'en', // lang is required for root locales
				},
				es: {
					label: 'Español',
				},
				ja: {
					label: '日本語',
				},
			},
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
