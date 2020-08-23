export default {
	mode: 'universal',
	target: 'static',
	head: {
		title: 'Vijay Rajasekar',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Software Engineer'
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
