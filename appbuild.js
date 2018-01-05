var browserify = require('browserify')
var fs = require('fs')
var bundler = browserify(__dirname + '/build/app-tep.js')
bundler.transform('uglifyify', { global: true  })
bundler.bundle()
  .pipe(fs.createWriteStream(__dirname + '/build/app.js'))
