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
