module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-rational-order',
		'stylelint-prettier/recommended',
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue/scss',
	],
	plugins: ['stylelint-order', 'stylelint-scss'],
	rules: {
		// Дополнительные правила
	},
};
