import { observable, action, toJS } from 'mobx'
import { addCellWithRandomPositionToMatrix } from "./utils/addCellWithRandomPositionToMatrix";
import { turnMatrixToLeftFrom, turnMatrixFromLeftTo } from './utils/turnMatrix'
import { moveAndStackValues } from './utils/moveAndStackValues'

export const state = observable({
  matrix: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],

  initialize() {
    this.matrix = addCellWithRandomPositionToMatrix(this.matrix)
  },

  addCellWithRandomPositionToMatrix() {
    this.matrix = addCellWithRandomPositionToMatrix(this.matrix)
  },

  setMatrix(matrix) {
    this.matrix = matrix
  },

  turnMatrixToLeftFrom(from) {
    console.log('turnMatrixToLeftFrom')
    this.matrix = turnMatrixToLeftFrom(this.matrix, from)
    console.log('this.matrix', toJS(this.matrix))
  },

  turnMatrixFromLeftTo(to) {
    console.log('turnMatrixFromLeftTo')
    this.matrix = turnMatrixFromLeftTo(this.matrix, to)
    console.log('this.matrix', toJS(this.matrix))
  },

  moveAndStack() {
    console.log('moveAndStack')
    this.matrix = moveAndStackValues(this.matrix)
    console.log('this.matrix', toJS(this.matrix))
  },
}, {
  initialize: action,
  setMatrix: action,
  turnMatrixToLeftFrom: action,
  turnMatrixFromLeftTo: action,
  moveAndStack: action,
})
