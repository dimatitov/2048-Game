import { turnMatrixToLeftFrom, TURN_DIRECTIONS, turnMatrixFromLeftTo } from './moveRelativeToLeft';


// top
// initial
// [1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 1, 2, 3],
// [4, 5, 6, 7]

// right
// top to right
// [4, 9, 5, 1],
// [5, 1, 6, 2],
// [6, 2, 7, 3],
// [7, 3, 8, 4],

// bottom
// right to bottom
// [7, 6, 5, 4],
// [3, 2, 1, 9],
// [8, 7, 6, 5],
// [4, 3, 2, 1],

// left
// bottom to left
// [4, 8, 3, 7],
// [3, 7, 2, 6],
// [2, 6, 1, 5],
// [1, 5, 9, 4],

describe('turnMatrix90', () => {
  test('turnMatrix from top to left', () => {
    const initialState = [
              [1, 2, 3, 4],
              [5, 6, 7, 8],
              [9, 1, 2, 3],
              [4, 5, 6, 7]
    ]
    const expectedState = [
              [4, 8, 3, 7],
              [3, 7, 2, 6],
              [2, 6, 1, 5],
              [1, 5, 9, 4],
    ]

    expect(turnMatrixToLeftFrom(initialState, TURN_DIRECTIONS.TOP)).toEqual(expectedState)
  })

  test('turnMatrix from right to left', () => {
    const initialState = [
              [4, 9, 5, 1],
              [5, 1, 6, 2],
              [6, 2, 7, 3],
              [7, 3, 8, 4],
    ]
    const expectedState = [
              [4, 8, 3, 7],
              [3, 7, 2, 6],
              [2, 6, 1, 5],
              [1, 5, 9, 4],
    ]

    expect(turnMatrixToLeftFrom(initialState, TURN_DIRECTIONS.RIGHT)).toEqual(expectedState)
  })

  test('turnMatrix from bottom to left', () => {
    const initialState = [
              [7, 6, 5, 4],
              [3, 2, 1, 9],
              [8, 7, 6, 5],
              [4, 3, 2, 1],
    ]
    const expectedState = [
              [4, 8, 3, 7],
              [3, 7, 2, 6],
              [2, 6, 1, 5],
              [1, 5, 9, 4],
    ]

    expect(turnMatrixToLeftFrom(initialState, TURN_DIRECTIONS.BOTTOM)).toEqual(expectedState)
  })

  test('turnMatrix from left to bottom', () => {
    const initialState = [
              [4, 8, 3, 7],
              [3, 7, 2, 6],
              [2, 6, 1, 5],
              [1, 5, 9, 4],
      ]
    const expectedState = [
              [7, 6, 5, 4],
              [3, 2, 1, 9],
              [8, 7, 6, 5],
              [4, 3, 2, 1],
    ]

    expect(turnMatrixFromLeftTo(initialState, TURN_DIRECTIONS.BOTTOM)).toEqual(expectedState)
  })

  test('turnMatrix from left to right', () => {
    const initialState = [
              [4, 8, 3, 7],
              [3, 7, 2, 6],
              [2, 6, 1, 5],
              [1, 5, 9, 4],
      ]
    const expectedState = [
              [4, 9, 5, 1],
              [5, 1, 6, 2],
              [6, 2, 7, 3],
              [7, 3, 8, 4],
    ]

    expect(turnMatrixFromLeftTo(initialState, TURN_DIRECTIONS.RIGHT)).toEqual(expectedState)
  })

  test('turnMatrix from left to top', () => {
    const initialState = [
              [4, 8, 3, 7],
              [3, 7, 2, 6],
              [2, 6, 1, 5],
              [1, 5, 9, 4],
      ]
    const expectedState = [
              [1, 2, 3, 4],
              [5, 6, 7, 8],
              [9, 1, 2, 3],
              [4, 5, 6, 7],
    ]

    expect(turnMatrixFromLeftTo(initialState, TURN_DIRECTIONS.TOP)).toEqual(expectedState)
  })




})
