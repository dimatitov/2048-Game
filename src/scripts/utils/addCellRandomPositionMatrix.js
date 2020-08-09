import cloneDeep from 'lodash.clonedeep';
import random from 'lodash.random';

/**
 * Генерирует рандомные значения по оси x, y
 * и пытается записать значение по этим координатам.
 * Пытается до тех пор пока не запишет значение в рандомную пустую ячейку.
 * @param state
 * @returns {*}
 */
export const addCellRandomPositionMatrix = (state) => {
  const isFullMatrix = state.flat().every((cell) => cell !== 0)

  if (isFullMatrix) {
    return state
  }

  const clonedState = cloneDeep(state);

  let randomByX = random(0, 3);
  let randomByY = random(0, 3);

  let cellHasBeenInstalled = false;

  const getValueCell = () => Math.random < 0.9 ? 2 : 4;

  while(!cellHasBeenInstalled) {
    const randomRow = clonedState[randomByX];
    const randomCell = randomRow[randomByY];



    if(randomCell === 0) {
      const cellValue = getValueCell()
      clonedState[randomByX][randomByY] = cellValue;
      cellHasBeenInstalled = true;
    }

    randomByX = random(0, 3);
    randomByY = random(0, 3);
  }



  return clonedState
}

