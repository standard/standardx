const path = require('path')
const test = require('tape')
const crossSpawn = require('cross-spawn')

const CMD_PATH = path.join(__dirname, '..', 'bin', 'cmd.js')

test('command line usage: --help', function (t) {
  t.plan(2)

  const result = crossSpawn.sync(CMD_PATH, ['--help'])

  t.error(result.error)
  t.equal(result.status, 0, 'zero exit code')
})

test('test-repo-eslintrc allows snake_case', function (t) {
  t.plan(4)

  const jsPath = path.join(__dirname, 'test-repo-eslintrc', 'index.js')
  const result = crossSpawn.sync(CMD_PATH, [jsPath])

  t.error(result.error)
  t.equal(result.status, 0, 'zero exit code')

  t.equal(result.stdout.toString().trim(), '', 'no output')
  t.equal(result.stderr.toString().trim(), '', 'no error output')
})

test('test-repo-package-json allows snake_case', function (t) {
  t.plan(4)

  const jsPath = path.join(__dirname, 'test-repo-package-json', 'index.js')
  const result = crossSpawn.sync(CMD_PATH, [jsPath])

  t.error(result.error)
  t.equal(result.status, 0, 'zero exit code')

  t.equal(result.stdout.toString().trim(), '', 'no output')
  t.equal(result.stderr.toString().trim(), '', 'no error output')
})
