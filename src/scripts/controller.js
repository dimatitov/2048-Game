import { state } from './state'
import { DIRECTIONS } from './constants/directions'

export const controller = {
  handlePressLeftArrow: () => {
    state.moveAndStack()
    state.addCellWithRandomPositionToMatrix()
  },

  handlePressTopArrow: () => {
    state.turnMatrixToLeftFrom(DIRECTIONS.TOP)
    state.moveAndStack()
    state.turnMatrixFromLeftTo(DIRECTIONS.TOP)
    state.addCellWithRandomPositionToMatrix()
  },

  handlePressRightArrow: () => {
    state.turnMatrixToLeftFrom(DIRECTIONS.RIGHT)
    state.moveAndStack()
    state.turnMatrixFromLeftTo(DIRECTIONS.RIGHT)
    state.addCellWithRandomPositionToMatrix()
  },

  handlePressBottomArrow: () => {
    state.turnMatrixToLeftFrom(DIRECTIONS.BOTTOM)
    state.moveAndStack()
    state.turnMatrixFromLeftTo(DIRECTIONS.BOTTOM)
    state.addCellWithRandomPositionToMatrix()
  },
}
