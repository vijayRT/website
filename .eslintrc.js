module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: { legacyDecorators: true }
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	// add your custom rules here
	rules: {
		'nuxt/no-cjs-in-config': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/html-indent': ['error', 'tab'],
		'vue/html-closing-bracket-newline': 'off',
		indent: ['error', 'tab'],
		'no-tabs': 'off'
	}
}
