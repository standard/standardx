/*! standardx. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
import standardEngine from 'standard-engine'
import opts from './options.js'

const Linter = standardEngine.linter

export default new Linter(opts)
