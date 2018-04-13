const gulp = require('gulp')
const electron = require('electron-connect').server.create()

gulp.task('default', () => {
  electron.start()
  gulp.watch('app.js', electron.restart)
  gulp.watch(['index.html'], electron.reload)
})
