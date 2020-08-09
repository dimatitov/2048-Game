import { addCellRandomPositionMatrix } from './addCellRandomPositionMatrix';


describe('addCellRandomPositionMatrix', () => {
  test('Add first cell to matrix', () => {
    const initialState = addCellRandomPositionMatrix([
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
    ]);
    const matrixWithOneCell = addCellRandomPositionMatrix(initialState)
    const cellsSize = matrixWithOneCell.flat().filter(cell => cell !== 0).length

    expect(cellsSize).toBe(1)
  })

  test('Add cell to matrix', () => {
    const initialState = [
              [0, 0, 2, 2],
              [2, 2, 2, 2],
              [2, 2, 0, 0],
              [2, 2, 0, 0]
    ]
    const matrixWithNewCell = addCellRandomPositionMatrix(initialState)
    const cells = matrixWithNewCell.flat()

    const cellAppearedInIndex0 = cells[0]
    const cellAppearedInIndex1 = cells[1]
    const cellAppearedInIndex10 = cells[10]
    const cellAppearedInIndex11 = cells[11]
    const cellAppearedInIndex14 = cells[14]
    const cellAppearedInIndex15 = cells[15]

    const ArrCellNull = [
      cellAppearedInIndex0,
      cellAppearedInIndex1,
      cellAppearedInIndex10,
      cellAppearedInIndex11,
      cellAppearedInIndex14,
      cellAppearedInIndex15
    ].filter(cell => cell !== 0).length === 1

    expect(ArrCellNull).toBe(true)

  })
})
