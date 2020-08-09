import cloneDeep from 'lodash.clonedeep'
import random from 'lodash.random'

/**
 * Генерирует рандомные значения по оси x, y
 * и пытается записать значение по этим координатам.
 * Пытается до тех пор пока не запишет значение в рандомную пустую ячейку.
 * @param state
 * @returns {*}
 */
export const addCellWithRandomPositionToMatrix = (state) => {
  const isFullMatrix = state.flat().every((cell) => cell !== 0)

  if (isFullMatrix) {
    return state
  }

  const clonedState = cloneDeep(state)

  let randomIndexByX = random(0, 3)
  let randomIndexByY = random(0, 3)

  let cellHasBeenInstalled = false

  while (!cellHasBeenInstalled) {
    const randomRow = clonedState[randomIndexByX]
    const randomCellInRandomRow = randomRow[randomIndexByY]

    if (randomCellInRandomRow === 0) {
      clonedState[randomIndexByX][randomIndexByY] = 2
      cellHasBeenInstalled = true
    }

    randomIndexByX = random(0, 3)
    randomIndexByY = random(0, 3)
  }

  return clonedState
}
