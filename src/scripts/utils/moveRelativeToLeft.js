import { turnMatrix } from "./turnMatrix"

export const TURN_DIRECTIONS = {
  LEFT: 'LEFT',
  TOP: 'TOP',
  RIGHT: 'RIGHT',
  BOTTOM: 'BOTTOM'
}

/**
 * Функция поворота в лево (исходную позицию)
 *
 */
export const turnMatrixToLeftFrom = (state, from) => {
  switch (from) {
    case TURN_DIRECTIONS.LEFT:
      return state;

    case TURN_DIRECTIONS.TOP:
      return turnMatrix(turnMatrix(turnMatrix(state)));

    case TURN_DIRECTIONS.RIGHT:
      return  turnMatrix(turnMatrix(state))

    case TURN_DIRECTIONS.BOTTOM:
      return  turnMatrix(state);
  }
}


/**
 * Функция поворота из лева(исходной позициции)
 *
 */
export const turnMatrixFromLeftTo = (state, from) => {
  switch (from) {
    case TURN_DIRECTIONS.LEFT:
      return state;

    case TURN_DIRECTIONS.TOP:
      return turnMatrix(state);

    case TURN_DIRECTIONS.RIGHT:
      return  turnMatrix(turnMatrix(state))

    case TURN_DIRECTIONS.BOTTOM:
      return  turnMatrix(turnMatrix(turnMatrix(state)));
  }
}



// const initialState = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 1, 2, 3],
//   [4, 5, 6, 7]
// ]

// turnMatrix90(initialState)
