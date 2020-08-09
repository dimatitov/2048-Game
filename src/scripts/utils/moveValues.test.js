import { moveValues } from "./moveValues";

test('moveValues', () => {
  const initialState = [
    [2, 0, 0, 2],
    [0, 8, 8, 0],
    [4, 4, 0, 0],
    [8, 0, 0, 8]
  ];
  const expectedState = [
    [2, 2, 0, 0],
    [8, 8, 0, 0],
    [4, 4, 0, 0],
    [8, 8, 0, 0]
  ];
  expect(moveValues(initialState)).toEqual(expectedState)
})
