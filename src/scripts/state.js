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


/*
* initial: [{value:0, id: null}, {value:0, id: null}, {value:2, id: [333]}, {value:2, id: [444]}]
* result: [{value:4, id: [444,333]}, {value:0, id: null}, {value:0, id: null}, {value:0, id: null}]
 /

/*
* compare:
* x3 -> x0
 /

/*
* id есть только у тех ячеек, у которых есть value
* id генерируется в момент создания рандомной ячейки
* Когда ячейки стакаются - в результирующей ячейки накапливается массив id ячеек,
* из которых состакалась эта ячейка
 /

/*
* Исходя из индексов(текущий и будущий)(другими словами положения в матрице) элемента(id)
* можно определить из какого в какой x,y переместился id и дать ему актуальные top, left
* на основе его положения в матрице.
*
* Алгоритм следующий:
* 1) создаем рандомную ячейку с рандомным id
* 2) перемещаем, стакаем и тд
* 3) находим элементы по id на игровом полотне, и актуализируем их top, left на основе их положения в матрице
 */