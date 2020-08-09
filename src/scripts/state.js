import { createStore, createEvent } from 'effector'
import { addCellWithRandomPositionToMatrix } from "./utils/addCellWithRandomPositionToMatrix";
import { turnMatrixToLeftFrom, turnMatrixFromLeftTo } from './utils/turnMatrix'
import { moveAndStackValues } from './utils/moveAndStackValues'
import { getCellElementsByMatrixState } from './utils/getCellElementsByMatrixState'

export const matrixState = createStore([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
])

export const eventInitialize = createEvent('eventInitialize');

export const eventAddCellWithRandomPositionToMatrix = createEvent('eventAddCellWithRandomPositionToMatrix')

export const eventTurnMatrixToLeftFrom = createEvent('eventTurnMatrixToLeftFrom')

export const eventTurnMatrixFromLeftTo = createEvent('eventTurnMatrixFromLeftTo')

export const eventMoveAndStackValues = createEvent('eventMoveAndStackValues')



matrixState.on(eventInitialize, (matrix) => addCellWithRandomPositionToMatrix(matrix))

matrixState.on(eventAddCellWithRandomPositionToMatrix, (matrix) => addCellWithRandomPositionToMatrix(matrix))

matrixState.on(eventTurnMatrixToLeftFrom, (matrix, from) => turnMatrixToLeftFrom(matrix, from))

matrixState.on(eventTurnMatrixFromLeftTo, (matrix, to) => turnMatrixFromLeftTo(matrix, to))

matrixState.on(eventMoveAndStackValues, (matrix) => moveAndStackValues(matrix))


matrixState.watch((matrix, payload) => {
  const cellElements = getCellElementsByMatrixState(matrix)
  const playFieldElement = document.getElementById('playfield')
  playFieldElement.innerHTML = ''

  cellElements.forEach((cell) => {
    playFieldElement.appendChild(cell)
  })
})
