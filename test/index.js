import { fileURLToPath } from 'node:url'
import test from 'tape'
import crossSpawn from 'cross-spawn'

const CMD_PATH = fileURLToPath(new URL('../bin/cmd.js', import.meta.url))

test('command line usage: --help', function (t) {
  t.plan(2)

  const result = crossSpawn.sync(CMD_PATH, ['--help'])

  t.error(result.error)
  t.equal(result.status, 0, 'zero exit code')
})

test('test-repo-eslintrc allows snake_case', function (t) {
  t.plan(4)

  const jsPath = fileURLToPath(new URL('./test-repo-eslintrc/index.js', import.meta.url))
  const result = crossSpawn.sync(CMD_PATH, [jsPath])

  t.error(result.error)
  t.equal(result.status, 0, 'zero exit code')

  t.equal(result.stdout.toString().trim(), '', 'no output')
  t.equal(result.stderr.toString().trim(), '', 'no error output')
})

test('test-repo-package-json allows snake_case', function (t) {
  t.plan(4)

  const jsPath = fileURLToPath(new URL('./test-repo-package-json/index.js', import.meta.url))
  const result = crossSpawn.sync(CMD_PATH, [jsPath])

  t.error(result.error)
  t.equal(result.status, 0, 'zero exit code')

  t.equal(result.stdout.toString().trim(), '', 'no output')
  t.equal(result.stderr.toString().trim(), '', 'no error output')
})
