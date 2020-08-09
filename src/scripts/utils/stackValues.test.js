import { stackValues } from "./stackValues";

test('stackValues', () => {
  const initialState = [
    [2, 2, 2, 2],
    [2, 4, 2, 2],
    [0, 0, 2, 2],
    [4, 2, 2, 4]
  ];
  const expectedState = [
    [4, 0, 4, 0],
    [2, 4, 4, 0],
    [0, 0, 4, 0],
    [4, 4, 0, 4]
  ];
  expect(stackValues(initialState)).toEqual(expectedState)
})