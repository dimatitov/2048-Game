import { moveAndStackValues } from "./moveAndStackValues"

test('moveAndStackValues', () => {
  const initialState = [
              [2, 0, 0, 2],
              [0, 8, 8, 0],
              [4, 4, 0, 0],
              [8, 0, 0, 8]
  ]
  const expectedState = [
              [4, 0, 0, 0],
              [16, 0, 0, 0],
              [8, 0, 0, 0],
              [16, 0, 0, 0]
  ]
  expect(moveAndStackValues(initialState)).toEqual(expectedState)
})
