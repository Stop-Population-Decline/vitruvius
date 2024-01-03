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
				ja: {
					label: 'Japanese',
				},
			},
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
