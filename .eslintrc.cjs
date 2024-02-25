module.exports = {
	"parser": "vue-eslint-parser",
	"root": true,
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"@vue/eslint-config-typescript",
		"plugin:@stylistic/all-extends"
	],
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"env": {
		"node": true
	},
	"rules": {
		"@stylistic/indent": [
			"error",
			"tab"
		],
		"@stylistic/padded-blocks": [
			"error",
			"never"
		]
	}
};
