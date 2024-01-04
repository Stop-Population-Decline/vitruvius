import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://tenbooks.netlify.app/',
	integrations: [starlight({
		title: 'Vitruvius',
		social: {
			github: 'https://github.com/Stop-Population-Decline/vitruvius',
			mastodon: 'https://mastodon.social/@stoppopulationdecline',
			threads: 'https://www.threads.net/@stoppopulationdecline',
			youtube: 'http://www.youtube.com/@stoppopulationdecline'
		},
		sidebar: [{
			label: 'Stop Population Decline (SPD)',
			link: 'https://stoppopulationdecline.org'
		}, {
			label: 'About SPD',
			link: 'https://stoppopulationdecline.org/about'
		}, {
			label: 'Research Notes',
			autogenerate: {
				directory: 'research'
			}
		}],
		head: [{
			tag: 'meta',
			attrs: {
				name: 'ahrefs-site-verification',
				content: '43e11f8b01ac09eae0c1d5137e5472c4fbc683844b5349b3aaa4efc23d3fb0b2'
			}
		}, {
			tag: 'meta',
			attrs: {
				name: "google-site-verification",
				content: "JcdPH-8wgLFOXHDEMQ_zLE2mj7pUy9OgDzzQxNBAo1Q"
			}
		}],
		customCss: ['./src/tailwind.css'],
		defaultLocale: 'root',
		// optional
		locales: {
			root: {
				label: 'English',
				lang: 'en' // lang is required for root locales
			},
			es: {
				label: 'Español'
			},
			ja: {
				label: '日本語'
			}
		}
	}), tailwind({
		applyBaseStyles: false
	}), sitemap({
		i18n: {
			defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
			locales: {
				en: 'en-US', // The `defaultLocale` value must present in `locales` keys
				es: 'es-ES',
				ja: 'ja_JP',
			},
		},
	}),
	]
});