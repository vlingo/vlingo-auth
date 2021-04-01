/** @type {import('prettier').Options} */
module.exports = {
	tabWidth: 4,
	printWidth: 100,
	singleQuote: true,
	plugins: ['./node_modules/prettier-plugin-svelte'],
	svelteStrictMode: false,
	svelteBracketNewLine: false,
};
