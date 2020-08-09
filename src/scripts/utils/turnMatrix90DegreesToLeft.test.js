import { turnMatrix90DegreesToLeft } from "./turnMatrix90DegreesToLeft";

test('turnMatrix90DegreesToLeft', () => {
  const initialState = [
    [2, 0, 0, 2],
    [0, 8, 8, 0],
    [4, 4, 0, 0],
    [8, 0, 0, 8],
  ]
  const expectedState = [
    [8, 4, 0, 2],
    [0, 4, 8, 0],
    [0, 0, 8, 0],
    [8, 0, 0, 2],
  ]
  expect(turnMatrix90DegreesToLeft(initialState)).toEqual(expectedState)
})
