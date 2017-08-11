#!/usr/bin/env node

if (process.version.match(/v(\d+)\./)[1] < 4) {
  console.error('standardx: Node v4 or greater is required. `standardx` did not run.')
} else {
  var opts = require('../options')
  require('standard-engine').cli(opts)
}
