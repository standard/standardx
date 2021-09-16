import { readFileSync } from 'node:fs'
import stdOpts from 'standard/options.js'

const stdVersion = stdOpts.version
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'))
const baseConfig = JSON.parse(readFileSync(stdOpts.eslintConfig.configFile, 'utf-8'))

export default Object.assign({}, stdOpts, {
  bugs: pkg.bugs.url,
  cmd: 'standardx',
  eslintConfig: {
    baseConfig,
    useEslintrc: true
  },
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style (tweaked by standardx)',
  version: `${pkg.version} (standard ${stdVersion})`
})
