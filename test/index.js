var path = require('path')
var test = require('tape')
var crossSpawn = require('cross-spawn')

var CMD_PATH = path.join(__dirname, '..', 'bin', 'cmd.js')

test('command line usage: --help', function (t) {
  t.plan(1)

  var result = crossSpawn.sync(CMD_PATH, ['--help'])
  if (result.error) t.fail(result.error)
  t.equal(result.status, 0, 'zero exit code')
})

test('test-repo-eslintrc allows snake_case', function (t) {
  t.plan(3)

  var result = crossSpawn.sync(CMD_PATH, [path.join(__dirname, 'test-repo-eslintrc', 'index.js')])
  if (result.error) t.fail(result.error)
  t.equal(result.status, 0, 'zero exit code')

  t.equal(result.stdout.toString().trim(), '', 'no output')
  t.equal(result.stderr.toString().trim(), '', 'no error output')
})

test('test-repo-package-json allows snake_case', function (t) {
  t.plan(3)

  var result = crossSpawn.sync(CMD_PATH, [path.join(__dirname, 'test-repo-package-json', 'index.js')])
  if (result.error) t.fail(result.error)
  t.equal(result.status, 0, 'zero exit code')

  t.equal(result.stdout.toString().trim(), '', 'no output')
  t.equal(result.stderr.toString().trim(), '', 'no error output')
})
