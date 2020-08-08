import { getViewByMatrixState } from "./getViewByMatrixState"


test('getViewByMatrixState', () => {
  const initialState = [
            [2, 0, 0, 2],
            [0, 4, 4, 0],
            [4, 4, 0, 0],
            [4, 0, 0, 4]
]

  const cellElementWihtValue0 = document.createElement('div')
  cellElementWihtValue0.classList.add('t0')

  const cellElementWihtValue2 = document.createElement('div')
  cellElementWihtValue2.textContent = '2'
  cellElementWihtValue2.classList.add('thing', 't2')

  const cellElementWihtValue4 = document.createElement('div')
  cellElementWihtValue4.textContent = '4'
  cellElementWihtValue4.classList.add('thing', 't4')

  const expectedState = [
    cellElementWihtValue2, cellElementWihtValue0, cellElementWihtValue0, cellElementWihtValue2,
    cellElementWihtValue0, cellElementWihtValue4, cellElementWihtValue4, cellElementWihtValue0,
    cellElementWihtValue4, cellElementWihtValue4, cellElementWihtValue0, cellElementWihtValue0,
    cellElementWihtValue4, cellElementWihtValue0, cellElementWihtValue0, cellElementWihtValue4,
]
  expect(getViewByMatrixState(initialState)).toEqual(expectedState)
})
