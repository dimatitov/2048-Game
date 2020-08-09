import {addCellWithRandomPositionToMatrix} from "./addCellWithRandomPositionToMatrix";

describe('addCellWithRandomPositionToMatrix', () => {
  test('Add cell to empty matrix', () => {
    const initialState = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
    const matrixWithOneCell = addCellWithRandomPositionToMatrix(initialState)
    const cellsSize = matrixWithOneCell.flat().filter(cell => cell !== 0).length
    expect(cellsSize).toBe(1)
  })

  test('Add cell to not empty matrix', () => {
    const initialState = [
      [0, 0, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 0, 0],
      [2, 2, 0, 0],
    ]
    const matrixWithNewCell = addCellWithRandomPositionToMatrix(initialState)
    const cells = matrixWithNewCell.flat()

    const cellWithIndex0 = cells[0]
    const cellWithIndex1 = cells[1]
    const cellWithIndex10 = cells[10]
    const cellWithIndex11 = cells[11]
    const cellWithIndex14 = cells[14]
    const cellWithIndex15 = cells[15]

    const isAppearedValueInOneEmptyCell = [
      cellWithIndex0,
      cellWithIndex1,
      cellWithIndex10,
      cellWithIndex11,
      cellWithIndex14,
      cellWithIndex15,
    ].filter(cell => cell !== 0).length === 1

    expect(isAppearedValueInOneEmptyCell).toBe(true)
  })

  test('Add cell to matrix with one empty position', () => {
    const initialState = [
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 0, 2],
    ]
    const expectedState = [
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
    ]
    expect(addCellWithRandomPositionToMatrix(initialState)).toEqual(expectedState)
  })

  test('Work and not move to infinity cycle if pass to isAppearedValueInOneEmptyCell full matrix', () => {
    const initialState = [
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
    ]
    const expectedState = [
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
    ]
    expect(addCellWithRandomPositionToMatrix(initialState)).toEqual(expectedState)
  })
})
