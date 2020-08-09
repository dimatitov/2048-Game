import { DIRECTIONS } from '../constants/directions'
import { turnMatrix90DegreesToLeft } from './turnMatrix90DegreesToLeft'

/**
 * Вращает матрицу по часовой стрелке n-ое кол-во в положение "влево" из положения "from",
 * кол-во вращений зависит от того из какого положения мы вращаем матрицу.
 * @param state
 * @param from
 * @returns {*[]|*}
 */
export const turnMatrixToLeftFrom = (state, from) => {
  switch (from) {
    case DIRECTIONS.LEFT:
      return state

    case DIRECTIONS.TOP:
      return turnMatrix90DegreesToLeft(turnMatrix90DegreesToLeft(turnMatrix90DegreesToLeft(state)))

    case DIRECTIONS.RIGHT:
      return turnMatrix90DegreesToLeft(turnMatrix90DegreesToLeft(state))

    case DIRECTIONS.BOTTOM:
      return turnMatrix90DegreesToLeft(state)
  }
}

/**
 * Вращает матрицу по часовой стрелке n-ое кол-во в положение "to" из положения "влево",
 * кол-во вращений зависит от того в какое положения мы вращаем матрицу.
 * @param state
 * @param to
 * @returns {*[]|*}
 */
export const turnMatrixFromLeftTo = (state, to) => {
  switch (to) {
    case DIRECTIONS.LEFT:
      return state

    case DIRECTIONS.TOP:
      return turnMatrix90DegreesToLeft(state)

    case DIRECTIONS.RIGHT:
      return turnMatrix90DegreesToLeft(turnMatrix90DegreesToLeft(state))

    case DIRECTIONS.BOTTOM:
      return turnMatrix90DegreesToLeft(turnMatrix90DegreesToLeft(turnMatrix90DegreesToLeft(state)))
  }
}
