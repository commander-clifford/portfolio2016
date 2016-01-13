module.exports = function(grunt) {
  	// Do grunt-related things in here

  	// Set 'version' Variable for Version Numbering
  	var version = new Date();
  	var ss = version.getSeconds();
  	var mi = version.getMinutes();
  	var hh = version.getHours();
	var dd = version.getDate();
	var mm = version.getMonth()+1;
	var yyyy = version.getFullYear();
	if(dd<10) { dd='0'+dd } 
	if(mm<10) { mm='0'+mm } 
	version = yyyy+''+mm+''+dd+'-'+hh+':'+mi+':'+ss;

  	// Project configuration.
	grunt.initConfig({
	  	pkg: grunt.file.readJSON('package.json'),
	  	// Watch for changes to specified files, if change detected run tasks
	  	watch: {
	  		less: {
	  			files: [
		          '*.less',
		          'less/*.less'
		        ],
		        tasks: ['less:dev','autoprefixer:dev','csso']
	  		},
	  		js: {
		        files: [
		          '*.js',
		          'js/*.js'
		        ],
		        tasks: ['jshint']
		    },
	    },
	    // Compile LESS into CSS
	    less: {
	    	dev: {
		      src: 'less/style.less',
		      dest: 'css/style.css'
		    }
	    },
	    // Check JavaScript for Errors
	    jshint: {
	      	options: {
	        	jshintrc: '.jshintrc'
	     	},
	      	all: [
		        'script.js'
	      	]
	    },
	    // Add Vendor Prefixes to style declarations only when neccesary ( according to 'Can I Use' )
	    autoprefixer: {
		    options: {
		        browsers: ['last 2 versions', 'Firefox <= 30', 'ie >= 8']
		    },
		    dev: {
		        options: {
		          map: {
		            prev: 'style.css'
		          }
		        },
		        src: 'css/style.css'
		    },
		    build: {
		        src: 'assets/css/main.min.css'
		    }
	    },
	    // Minify CSS for production
	    csso: {
		  	compress: {
		    	files: {
		      		'css/style.min.css': ['css/style.css']
		    	}
			},
			banner: {
			    options: {
			      	banner: '/* \n @name: the cascading style sheet \n @desc: a suite style sheet, complied from a bootstrap source download and some of my own custom stuff\n @author: Clifford R Nelson \n @since v'+version+'\n*/\n'
			    },
			    files: {
			      	'css/style.min.css': ['css/style.min.css']
			    }
			}
		}
	});

	// devDependencies (see sibling file: package.json)
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csso');

	// Default task ( 'grunt' command will call this )
  	grunt.registerTask('default', ['watch']);

};