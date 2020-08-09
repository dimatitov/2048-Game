import foreachRight from 'lodash.foreachright'
import cloneDeep from 'lodash.clonedeep'
import times from 'lodash.times'

/**
 * Обходит массив слева направо и сдвигает нули слева направо
 * за 1 вызов может сдвинуть только 1 ноль в крайнее правое положение
 * @param state
 * @returns {state}
 */
const moveValuesLeftToRight = (state) => {
  state.forEach((row) => {
    row.forEach((cell, cellIndex, cells) => {
      const nextCell = cells[cellIndex + 1]

      if (cell === 0 && nextCell) {
        cells[cellIndex] = nextCell
        cells[cellIndex + 1] = 0
      }
    })
  })
  return state
}

/**
 * Обходит массив справа налево и сдвигает нули слева направо
 * за 1 вызов может сдвинуть только 1 ноль в крайнее правое положение
 * @param state
 * @returns {*}
 */
const moveValuesRightToLeft = (state) => {
  state.forEach((row) => {
    foreachRight(row, (cell, cellIndex, cells) => {
      const nextCell = cells[cellIndex - 1];

      if (nextCell && nextCell === 0) {
        cells[cellIndex - 1] = cell;
        cell[cellIndex] = 0;
      }
    })
  })
  return state;
}

/**
 * Сдвигает нули в крайнее правое положение
 *  Функции moveValuesLeftToRight, moveValuesRightToLeft за 1 вызов
 *  могут свдинуть только 1 ноль в крайнее левое положение, поэтому для того,
 *  чтобы сдвинуть все нули в крайнее правое положение нужно вызвать эти функции поочередно
 *  столько раз, сколько у нас ячеек в строке(массиве) - 1
 * @param state
 * @returns state
 */
export const moveValues = (state = []) => {
  const moveFunctions = times(state.length, (index) => {
    const isEven = (index + 1) % 2 !== 0
    return isEven ? moveValuesRightToLeft : moveValuesLeftToRight
  })

  let result = cloneDeep(state)

  moveFunctions.forEach((moveFn) => {
    result = moveFn(result)
  })

  return result
}



