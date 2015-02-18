module.exports = function (grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			dev: {
				files: {
					'build/app.js': ['js/app.jsx']
				},
				options: {
					transform: [
						'babelify', 'reactify'
					]
				},
			}
		},
		watch: {
			src: {
				files: ['js/**/*.js', 'js/**/*.jsx', '!source/build/app.js'],
				tasks: ['browserify:dev'],
				options: {
					livereload: true
				}
			}
		},
		connect: {
			dev: {
				options: {
					hostname: 'localhost',
					port: 7012,
					open: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('start:dev', ['browserify', 'connect', 'watch']);

	grunt.registerTask('default', 'browserify');
};
