module.exports = {
	parser: 'vue-eslint-parser',
	root: true,
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', '@vue/eslint-config-typescript'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	env: {
		node: true,
	},
};
