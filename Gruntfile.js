/* jshint node:true */
'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var bannerTxt = grunt.file.read('banner.txt');


    // Project configuration.
    grunt.initConfig({
        distDir: 'dist',
        destDir: '<%= distDir %>',
        year: new Date().getFullYear(),
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            main: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: [ 'src/**/*.js', 'Gruntfile.js']
            }
        }
    });


    grunt.registerTask('test', [

    ]);

    grunt.registerTask('build',[
        'jshint'
    ]);



    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};