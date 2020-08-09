import { getCellElementsByMatrixState } from "./getCellElementsByMatrixState";

test('getCellElementsByMatrixState', () => {
  const initialState = [
    [2, 2, 2, 2],
    [2, 4, 2, 2],
    [0, 0, 2, 2],
    [4, 2, 2, 4],
  ];

  const cellElementWithValue0 = document.createElement('div')
  cellElementWithValue0.classList.add('t0')

  const cellElementWithValue2 = document.createElement('div')
  cellElementWithValue2.textContent = '2'
  cellElementWithValue2.classList.add('thing', 't2')

  const cellElementWithValue4 = document.createElement('div')
  cellElementWithValue4.textContent = '4'
  cellElementWithValue4.classList.add('thing', 't4')

  const expectedState = [
    cellElementWithValue2, cellElementWithValue2, cellElementWithValue2, cellElementWithValue2,
    cellElementWithValue2, cellElementWithValue4, cellElementWithValue2, cellElementWithValue2,
    cellElementWithValue0, cellElementWithValue0, cellElementWithValue2, cellElementWithValue2,
    cellElementWithValue4, cellElementWithValue2, cellElementWithValue2, cellElementWithValue4,
  ]

  expect(getCellElementsByMatrixState(initialState)).toEqual(expectedState)
})
