const test = require('ava')
const { fromXRotation , toString } = require('./index')

const { compareVectors } = require('../../../../test/helpers/index')

test('mat4: fromXRotation() should return a new mat4 with correct values', (t) => {
  let rotation = 90 * 0.017453292519943295

  const obs2 = fromXRotation(rotation)
  t.true(compareVectors(obs2, [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1]))

  const obs3 = fromXRotation(-rotation)
  t.true(compareVectors(obs3, [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1]))
})

test('mat4: fromXRotation() called with out parameter should return a new mat4 with correct values', (t) => {
  let rotation = 90 * 0.017453292519943295

  const mat2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const ret2 = fromXRotation(mat2, rotation)
  t.true(compareVectors(mat2, [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1]))
  t.true(compareVectors(ret2, [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1]))
  t.is(mat2, ret2)

  const mat3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const ret3 = fromXRotation(mat3, -rotation)
  t.true(compareVectors(mat3, [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1]))
  t.true(compareVectors(ret3, [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1]))
})
