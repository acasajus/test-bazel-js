import { expect, test } from 'vitest'

test('math works', () => {
  expect(1 + 1).toBe(2)
})

test('string concatenation', () => {
  expect('Bazel' + ' ' + 'Vitest').toBe('Bazel Vitest')
})
