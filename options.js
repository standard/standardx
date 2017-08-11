var pkg = require('./package.json')
var stdVersion = require('standard/package.json').version
var stdOpts = require('standard/options.js')

var opts = Object.assign({}, stdOpts, {
  bugs: pkg.bugs.url,
  cmd: 'standardx',
  eslintConfig: {
    baseConfig: require('standard/eslintrc.json'),
    useEslintrc: true
  },
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style (tweaked by standardx)',
  version: `${pkg.version} (standard ${stdVersion})`
})

module.exports = opts
