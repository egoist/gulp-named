import gulp from 'gulp'

export const task = (...args) => {
  return gulp.task(...args)
}

export const src = (...args) => {
  return gulp.src(...args)
}

export const dest = (...args) => {
  return gulp.dest(...args)
}

export const watch = (...args) => {
  return gulp.watch(...args)
}

// aliases
export const input = src
export const output = dest
