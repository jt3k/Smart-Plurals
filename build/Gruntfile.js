module.exports = function(grunt) {
	require('./grunt.mergeConfig.js')(grunt);

  require('./config/all-defaults.js')(grunt);
  require('./config/config-PluralRules.js')(grunt);

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
