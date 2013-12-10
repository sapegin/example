module.exports = function(grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'build/styles.css': ['styles/styles.styl']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', ['stylus']);
  grunt.registerTask('deploy', ['stylus']);

};