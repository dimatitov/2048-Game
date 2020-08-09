import { turnMatrixToLeftFrom, turnMatrixFromLeftTo } from "./turnMatrix";
import { DIRECTIONS } from '../constants/directions'

// Turn example:
// initial
// [1,2,3,4],
// [5,6,7,8],
// [9,1,2,3],
// [4,5,6,7],

// top to right
// [4,9,5,1],
// [5,1,6,2],
// [6,2,7,3],
// [7,3,8,4],

// right to bottom
// [7,6,5,4],
// [3,2,1,9],
// [8,7,6,5],
// [4,3,2,1],

// bottom to left
// [4,8,3,7],
// [3,7,2,6],
// [2,6,1,5],
// [1,5,9,4],

describe('turnMatrixToLeftFrom', () => {
  test('turnMatrixToLeftFrom: turnMatrix from left to left', () => {
    const initialState = [
      [1,2,3,4],
      [5,6,7,8],
      [9,1,2,3],
      [4,5,6,7],
    ]
    const expectedState = [
      [1,2,3,4],
      [5,6,7,8],
      [9,1,2,3],
      [4,5,6,7],
    ]
    expect(turnMatrixToLeftFrom(initialState, DIRECTIONS.LEFT)).toEqual(expectedState)
  })

  test('turnMatrixToLeftFrom: turnMatrix from top to left', () => {
    const initialState = [
      [1,2,3,4],
      [5,6,7,8],
      [9,1,2,3],
      [4,5,6,7],
    ]
    const expectedState = [
      [4,8,3,7],
      [3,7,2,6],
      [2,6,1,5],
      [1,5,9,4],
    ]
    expect(turnMatrixToLeftFrom(initialState, DIRECTIONS.TOP)).toEqual(expectedState)
  })

  test('turnMatrixToLeftFrom: turnMatrix from right to left', () => {
    const initialState = [
      [4,9,5,1],
      [5,1,6,2],
      [6,2,7,3],
      [7,3,8,4],
    ]
    const expectedState = [
      [4,8,3,7],
      [3,7,2,6],
      [2,6,1,5],
      [1,5,9,4],
    ]
    expect(turnMatrixToLeftFrom(initialState, DIRECTIONS.RIGHT)).toEqual(expectedState)
  })

  test('turnMatrixToLeftFrom: turnMatrix from bottom to left', () => {
    const initialState = [
      [1,2,3,4],
      [5,6,7,8],
      [9,1,2,3],
      [4,5,6,7],
    ]
    const expectedState = [
      [4,9,5,1],
      [5,1,6,2],
      [6,2,7,3],
      [7,3,8,4],
    ]
    expect(turnMatrixToLeftFrom(initialState, DIRECTIONS.BOTTOM)).toEqual(expectedState)
  })
})

describe('turnMatrixFromLeftTo', () => {
  test('turnMatrix from left to left', () => {
    const initialState = [
      [1,2,3,4],
      [5,6,7,8],
      [9,1,2,3],
      [4,5,6,7],
    ]
    const expectedState = [
      [1,2,3,4],
      [5,6,7,8],
      [9,1,2,3],
      [4,5,6,7],
    ]
    expect(turnMatrixFromLeftTo(initialState, DIRECTIONS.LEFT)).toEqual(expectedState)
  })

  test('turnMatrix from left to top', () => {
    const initialState = [
      [1,2,3,4],
      [5,6,7,8],
      [9,1,2,3],
      [4,5,6,7],
    ]
    const expectedState = [
      [4,9,5,1],
      [5,1,6,2],
      [6,2,7,3],
      [7,3,8,4],
    ]
    expect(turnMatrixFromLeftTo(initialState, DIRECTIONS.TOP)).toEqual(expectedState)
  })

  test('turnMatrix from left to right', () => {
    const initialState = [
      [1,2,3,4],
      [5,6,7,8],
      [9,1,2,3],
      [4,5,6,7],
    ]
    const expectedState = [
      [7,6,5,4],
      [3,2,1,9],
      [8,7,6,5],
      [4,3,2,1],
    ]
    expect(turnMatrixFromLeftTo(initialState, DIRECTIONS.RIGHT)).toEqual(expectedState)
  })

  test('turnMatrix from left to bottom', () => {
    const initialState = [
      [1,2,3,4],
      [5,6,7,8],
      [9,1,2,3],
      [4,5,6,7],
    ]
    const expectedState = [
      [4,8,3,7],
      [3,7,2,6],
      [2,6,1,5],
      [1,5,9,4],
    ]
    expect(turnMatrixFromLeftTo(initialState, DIRECTIONS.BOTTOM)).toEqual(expectedState)
  })
})
