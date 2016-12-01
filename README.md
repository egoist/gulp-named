# gulp-named

[![NPM version](https://img.shields.io/npm/v/gulp-named.svg?style=flat-square)](https://npmjs.com/package/gulp-named) [![NPM downloads](https://img.shields.io/npm/dm/gulp-named.svg?style=flat-square)](https://npmjs.com/package/gulp-named) [![Build Status](https://img.shields.io/circleci/project/egoist/gulp-named/master.svg?style=flat-square)](https://circleci.com/gh/egoist/gulp-named)

## Install

```bash
$ npm install -D gulp gulp-named
```

## Usage

```js
// gulpfile.babel.js
import {task, src, dest, watch} from 'gulp-named'

task('js', () => {
  return src('./js/*.js')
    .pipe(babel())
    .pipe(dest('./dist'))
})

task('watch', () => {
  watch('./js/*.js', ['js'])
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**gulp-named** © [EGOIST](https://github.com/egoist), Released under the [MIT](https://egoist.mit-license.org/) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/gulp-named/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
