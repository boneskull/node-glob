// https://github.com/isaacs/node-glob/issues/547
import t from 'tap'

import { globSync } from '../dist/cjs/src/index.js'

if (process.platform !== 'win32') {
  t.pass('no need to test this except on windows')
  process.exit(0)
}

const dir = t.testdir({
  'program files': {
    a: '',
    b: '',
    c: '',
  },
})

t.strictSame(
  globSync('progra~1\\*', { cwd: dir, windowsPathsNoEscape: true }).sort(
    (a, b) => a.localeCompare(b, 'en')
  ),
  ['a', 'b', 'c']
)
