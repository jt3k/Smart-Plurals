module.exports = function(grunt) {

  grunt.registerTask('Plurals', [ 'concat:Plurals', 'uglify:Plurals', 'jshint:Plurals', 'jasmine:Plurals' ])

  var src = 'src/Smart/Plurals'
    , dest = 'dist/Plurals'
    , test = 'test/Plurals';
  var englishOnly = [
    src + '/Smart.Plurals.core.js'
    , src + '/Smart.Plurals.languages-english.js'
  ];
  var allFiles = [
    src + '/Smart.Plurals.core.js'
    , src + '/Smart.Plurals.languages-english.js'
    , src + '/Smart.Plurals.languages-czech.js'
    , src + '/Smart.Plurals.languages-french.js'
    , src + '/Smart.Plurals.languages-irish.js'
    , src + '/Smart.Plurals.languages-latvian.js'
    , src + '/Smart.Plurals.languages-lithuanian.js'
    , src + '/Smart.Plurals.languages-polish.js'
    , src + '/Smart.Plurals.languages-romanian.js'
    , src + '/Smart.Plurals.languages-russian.js'
    , src + '/Smart.Plurals.languages-slovenian.js'
  ];

  var allTests = [
    test + '/**/*.js'
  ];

  grunt.mergeConfig({
    concat: {
      'Plurals': {
        files: [
          { dest: dest + '/Smart.Plurals.all.js', src: allFiles }
          , { dest: dest + '/Smart.Plurals.en.js', src: englishOnly }
        ]
      }
    }
    ,
    uglify: {
      'Plurals': {
        files: [
          { dest: dest + '/Smart.Plurals.all.min.js', src: allFiles }
          , { dest: dest + '/Smart.Plurals.en.min.js', src: englishOnly }
        ]
      }
    }
    ,
    jshint: {
      'Plurals': {
        src: allFiles
      }
    }
    ,
    jasmine: {
      'Plurals': {
        src: allFiles
        , options: {
          specs: allTests
        }
      }
    }
    ,
    watch: {
      'Plurals': {
        files: allFiles
        , tasks: [ 'Plurals' ]
      }
    }
  });
};