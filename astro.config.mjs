// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.venmail.io',
	integrations: [
		starlight({
			title: 'Venmail Docs',
			logo: {
				light: './src/assets/venmail-logo-light.png',
				dark: './src/assets/venmail-logo-dark.png',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/VenMail' },
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico' } },
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' } },
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' } },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Welcome', slug: 'index' },
						{ label: 'Quickstart', slug: 'quickstart' },
						{ label: 'Authentication', slug: 'authentication' },
					],
				},
				{
					label: 'Sending Email',
					items: [
						{ label: 'Send a Message', slug: 'sending/send-message' },
						{ label: 'Send Raw RFC2822', slug: 'sending/send-raw' },
						{ label: 'Custom Headers', slug: 'sending/headers' },
					],
				},
				{
					label: 'VVS-1 (Trust Layer)',
					items: [
						{ label: 'Overview', slug: 'vvs/overview' },
						{ label: 'Signing Messages', slug: 'vvs/signing' },
						{ label: 'Verifying Messages', slug: 'vvs/verification' },
						{ label: 'Key Management', slug: 'vvs/key-management' },
						{ label: 'Trust Levels', slug: 'vvs/trust-levels' },
						{ label: 'Header Reference', slug: 'vvs/reference' },
					],
				},
				{
					label: 'Webhooks',
					items: [
						{ label: 'Overview', slug: 'webhooks/overview' },
						{ label: 'Event Types', slug: 'webhooks/events' },
						{ label: 'Signature Verification', slug: 'webhooks/security' },
					],
				},
				{
					label: 'SDKs',
					items: [
						{ label: 'Node.js', slug: 'sdks/node' },
						{ label: 'PHP', slug: 'sdks/php' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'Messages', slug: 'api-reference/messages' },
						{ label: 'Credentials', slug: 'api-reference/credentials' },
						{ label: 'Domains', slug: 'api-reference/domains' },
						{ label: 'Routes', slug: 'api-reference/routes' },
					],
				},
				{
					label: 'Domains',
					items: [
						{ label: 'DNS Setup', slug: 'domains/setup' },
						{ label: 'Verification', slug: 'domains/verification' },
					],
				},
			],
		}),
	],
});
