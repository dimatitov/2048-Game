import { stackValues } from "./stackValues"

test('stackValues', () => {
  const initialState = [
              [2, 0, 0, 2],
              [0, 8, 8, 0],
              [4, 4, 0, 0],
              [8, 0, 0, 8]
  ]
  const expectedState = [
              [2, 0, 0, 2],
              [0, 16, 0, 0],
              [8, 0, 0, 0],
              [8, 0, 0, 8]
  ]
  expect(stackValues(initialState)).toEqual(expectedState)
})
