module.exports = {
  options: {
    livereload: true,
  },
  html:{
    files: [
      'src/index.html',
      'src/inc/*.html',
    ],
    tasks: ['bake'],
    options: {
      spawn: false
    }
  },
  sass: {
    files: ['src/sass/**/*.scss'],
    tasks: ['compass:dev']
  },
  css: {
    files: ['*.css'],
    tasks: ['cssmin']
  },
  scripts: {
    files: ['src/scripts/scripts.js'],
    tasks: ['uglify'],
    options: {
      spawn: false,
    }
  }
}