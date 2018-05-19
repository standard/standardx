var path = require('path')
var test = require('tape')
var crossSpawn = require('cross-spawn')

var CMD_PATH = path.join(__dirname, '..', 'bin', 'cmd.js')

test('command line usage: --help', function (t) {
  t.plan(2)

  var result = crossSpawn.sync(CMD_PATH, ['--help'])

  t.error(result.error)
  t.equal(result.status, 0, 'zero exit code')
})

test('test-repo-eslintrc allows snake_case', function (t) {
  t.plan(4)

  var jsPath = path.join(__dirname, 'test-repo-eslintrc', 'index.js')
  var result = crossSpawn.sync(CMD_PATH, [jsPath])

  t.error(result.error)
  t.equal(result.status, 0, 'zero exit code')

  t.equal(result.stdout.toString().trim(), '', 'no output')
  t.equal(result.stderr.toString().trim(), '', 'no error output')
})

test('test-repo-package-json allows snake_case', function (t) {
  t.plan(4)

  var jsPath = path.join(__dirname, 'test-repo-package-json', 'index.js')
  var result = crossSpawn.sync(CMD_PATH, [jsPath])

  t.error(result.error)
  t.equal(result.status, 0, 'zero exit code')

  t.equal(result.stdout.toString().trim(), '', 'no output')
  t.equal(result.stderr.toString().trim(), '', 'no error output')
})
