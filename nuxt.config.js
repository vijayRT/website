export default {
	mode: 'universal',
	target: 'static',
	head: {
		title: 'Vijay Rajasekar | Software Engineer',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	css: [],
	plugins: [],
	components: true,
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/composition-api'
	],
	modules: [
		['nuxt-fontawesome', {
			component: 'fa',
			imports: [
				{
					set: '@fortawesome/free-brands-svg-icons',
					icons: ['fab']
				}
			]
		}]
	],
	build: {}
}
