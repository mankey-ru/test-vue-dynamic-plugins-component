// const fs = require('fs');

const appNameArgIndex = process.argv.indexOf('--name');
const buildName = process.argv[appNameArgIndex + 1];
const isAsync = buildName === 'comp-async';

module.exports = {
	filenameHashing: false,
	// outputDir: `dist_${buildName}`,
	outputDir: `${__dirname}/../test-vue-dynamic-plugins/public/pluginService/pluginComps/${buildName}`,
	chainWebpack: (config) => {
		config.optimization.delete('splitChunks');
		// config.optimization.minimize(false);
	},
	configureWebpack: function (CFG) {
		console.log(`\n\n\n\n		buildName=${buildName}
		isAsync=${isAsync}    \n\n\n\n`);

		// CFG.output.filename = `${buildName}.js`;
		CFG.output.filename = `[name].js`;
		CFG.output.libraryTarget = 'system';

		// https://v4.webpack.js.org/configuration/output/#outputlibrarytarget
		if (isAsync) {
			//CFG.output.libraryTarget = 'system';
		} else {
			//CFG.output.library = 'TTTTT';
			//CFG.output.libraryTarget = 'self';
			// libraryTarget = 'jsonp' вызывает функцию с именем, указанным в output.library
			// libraryTarget: "var" | "assign" | "this" | "window" | "self" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "amd" | "amd-require" | "umd" | "umd2" | "jsonp" | "system"
		}
	},
};
