import { getCellElementsByMatrixState } from './utils/getCellElementsByMatrixState';
import { addCellWithRandomPositionToMatrix } from "./utils/addCellWithRandomPositionToMatrix";
import { controller } from './controller';
import { MAP_DIRECTION_TO_KEY_CODE } from './constants/mapKeyCodeToDirection';
import { eventInitialize } from './state';

const initialize = () => {
  const initialState = addCellWithRandomPositionToMatrix([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);

  const cellElements = getCellElementsByMatrixState(initialState)
  const playFieldElement = document.getElementById('playfield')

  cellElements.forEach((cell) => {
    playFieldElement.appendChild(cell)
  })
  console.log('playFieldElement', playFieldElement)
  console.log('cellElements', cellElements)
  eventInitialize()

  console.log('eventInitialize', eventInitialize)

  document.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
      case MAP_DIRECTION_TO_KEY_CODE.LEFT:
        controller.handlePressLeftArrow()
        break

      case MAP_DIRECTION_TO_KEY_CODE.TOP:
        controller.handlePressTopArrow()
        break

      case MAP_DIRECTION_TO_KEY_CODE.RIGHT:
        controller.handlePressRightArrow()
        break

      case MAP_DIRECTION_TO_KEY_CODE.BOTTOM:
        controller.handlePressBottomArrow()
        break
    }
  })
}

initialize()
