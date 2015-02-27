module.exports = function(grunt) {

    grunt.initConfig({
        jade: {
            compile: {
                files: [{
                    expand: 'true',
                    cwd: 'src/public',
                    src: '**/*.jade',
                    dest: 'build/',
                    ext: '.html'
                }]
            }
        },
        stylus: {
            compile: {
                files: [{
                    expand: 'true',
                    cwd: 'src/stylesheets',
                    src: '**/*.styl',
                    dest: 'build/css',
                    ext: '.css'
                }]
            }
        },
        copy: {
            compile: {
                files: [{
                    expand: 'true',
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'build/js'
                },
                {
                    expand: 'true',
                    cwd: 'src/assets',
                    src: '**/*',
                    dest: 'build/assets'
                }]
            }
        },
        'http-server': {
            dev: {
                root: 'build',
                port: 4000,
                host: '0.0.0.0',
                showDir: true,
                autoIndex: true,
                ext: "html",
                runInBackground: true
            }
        },
        watch: {
            dev: {
                files: 'src/**/*',
                tasks: ['build'],
                options: {
                    event: ['all']
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: 'build/lib',
                    layout: 'byComponent'
                }
            }
        },
        clean: ['build']
    });

    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-http-server");

    grunt.registerTask('build', ['jade:compile', 'stylus:compile', 'copy:compile', 'bower']);
    grunt.registerTask('dev', ['build', 'http-server:dev', 'watch:dev']);

};
