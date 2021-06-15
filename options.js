const pkg = require('./package.json')
const stdVersion = require('standard/package.json').version
const stdOpts = require('standard/options.js')

const standardConf = require('standard/eslintrc.json')

const resolvedConf = {
  extends: standardConf.extends.map(function (configName) {
    return require.resolve(`eslint-config-${configName}`)
  })
}

const opts = Object.assign({}, stdOpts, {
  bugs: pkg.bugs.url,
  cmd: 'standardx',
  eslintConfig: {
    baseConfig: resolvedConf,
    useEslintrc: true,
    resolvePluginsRelativeTo: __dirname
  },
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style (tweaked by standardx)',
  version: `${pkg.version} (standard ${stdVersion})`
})

module.exports = opts
