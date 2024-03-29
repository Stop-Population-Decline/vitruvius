import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.population.fyi/',
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
			link: 'https://www.population.news',
			translations: {
				es: 'Detener la Disminución de la Población (SPD)',
				ja: '人口減少を止める (SPD)'
			}
		}, {
			label: 'Research Notes',
			translations: {
				es: 'Notas de Investigaci',
				ja: '研究ノート'
			},
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
		},
		{
			tag: 'script',
			attrs: {
				type: "text/partytown",
				src: "https://www.googletagmanager.com/gtag/js?id=G-CPFSJMVC4F"

			}
		}, {
			tag: 'script',
			attrs: {
				type:"text/partytown"
			},
			content: `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-CPFSJMVC4F');`
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
	}),
	tailwind({
		applyBaseStyles: false
	}),
	sitemap(),
	robotsTxt({
		sitemap: true
	}),
	partytown({
		// Example: Add dataLayer.push as a forwarding-event.
		config: {
			forward: ['dataLayer.push'],
		},
	}),]
});