import { eventInitialize, eventAddCellWithRandomPositionToMatrix, eventMoveAndStackValues, eventTurnMatrixFromLeftTo, eventTurnMatrixToLeftFrom } from './state'
import { DIRECTIONS } from './constants/directions'

export const controller = {
  handlePressLeftArrow: () => {
    eventMoveAndStackValues()
    eventAddCellWithRandomPositionToMatrix()
  },

  handlePressTopArrow: () => {
    eventTurnMatrixToLeftFrom(DIRECTIONS.TOP)
    eventMoveAndStackValues()
    eventTurnMatrixFromLeftTo(DIRECTIONS.TOP)
    eventAddCellWithRandomPositionToMatrix()
  },

  handlePressRightArrow: () => {
    eventTurnMatrixToLeftFrom(DIRECTIONS.RIGHT)
    eventMoveAndStackValues()
    eventTurnMatrixFromLeftTo(DIRECTIONS.RIGHT)
    eventAddCellWithRandomPositionToMatrix()
  },

  handlePressBottomArrow: () => {
    eventTurnMatrixToLeftFrom(DIRECTIONS.BOTTOM)
    eventMoveAndStackValues()
    eventTurnMatrixFromLeftTo(DIRECTIONS.BOTTOM)
    eventAddCellWithRandomPositionToMatrix()
  },
}
