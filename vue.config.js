const fs = require('fs');

module.exports = {
	// filenameHashing: false,
	// outputDir: __dirname + '/../test-vue-dynamic-plugins/public/pluginService/pluginComps/MyPluginAsyncComponent',
	chainWebpack: (config) => {
		config.optimization.delete('splitChunks');
	},
	configureWebpack: function (CFG) {
		CFG.output.filename = '[name].js';
		CFG.output.libraryTarget = 'system';
	},
};
