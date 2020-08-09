import { moveAndStackValues } from "./moveAndStackValues";

test('moveAndStackValues', () => {
  const initialState = [
    [2, 2, 2, 2],
    [2, 4, 2, 2],
    [0, 0, 2, 2],
    [4, 2, 2, 4]
  ];
  const expectedState = [
    [4, 4, 0, 0],
    [2, 4, 4, 0],
    [4, 0, 0, 0],
    [4, 4, 4, 0]
  ];
  expect(moveAndStackValues(initialState)).toEqual(expectedState)
})
