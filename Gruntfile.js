'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      task: {
        src: [
          'index.html'
        ]
      }
    },
    sass: {
      dist: {
        files: {
          'css/main.css': 'css/main.sass'
        }
      }
    },
    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'css/'
        },
        processors: [
          require('pixrem')(),
          require('autoprefixer')({
            browsers: 'last 2 versions'
          })
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
    buildcontrol: {
      options: {
        dir: './',
        commit: true,
        push: true,
      },
      pages: {
        options: {
          remote: 'origin',
          branch: 'master'
        }
      },
      heroku: {
        options: {
          remote: 'heroku',
          branch: 'master'
        }
      }
    },
    bb: grunt.file.readJSON('./grunt-bitballoon.json'),
    bitballoon: {
      options: {
        token: '<%= bb.token %>',
        src: './'
      },
      prod: {
        site: 'http://chuah48263.bitballoon.com'
      }
    }
  });
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-bitballoon');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.registerTask('default', ['wiredep', 'sass', 'postcss', 'buildcontrol',
    'bitballoon'
  ]);
};
