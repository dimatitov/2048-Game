import cloneDeep from 'lodash.clonedeep';
import times from 'lodash.times';
import forEachRight from 'lodash.foreachright';

/**
 * Алгоритм move - stack - move.
 * move - перенос нулей в конец
 * stack - стаканье одинаковых чисел
 * move - перемещение появившихся нулей в конец
 * @param  {Перебирает массив с данными игры и перемещает элементы.} moveValues
 * @param  {Функция с перебором массива слева для перемещения нулей с лево на право} moveValuesLeftToRight
 * @param  {Функция с перебором массива справа для перемещения нулей с лево на право} moveValuesRightToLeft
 * @param  {Фнккция с times для создания массива функций} moveFunctions
 * @param  {Перебираем массив функций для вызова функций} moveFunctions.forEach
 */

export const moveValues = (state = []) => {

  const moveValuesLeftToRight = (state) => {
    state.forEach((row) => {
      row.forEach((cell, cellIndex, cells) => {
        const nextCell = cells[cellIndex + 1];

        if(cell === 0 && nextCell) {
          cells[cellIndex] = nextCell;
          cells[cellIndex + 1] = 0;
        }
      })
    })
    return state;
  }

  const moveValuesRightToLeft = (state) => {
    state.forEach((row) => {
      forEachRight(row, (cell, cellIndex, cells) => {
        const nextCell = cells[cellIndex - 1];

        if(nextCell && nextCell === 0) {
          cells[cellIndex - 1] = cell;
          cell[cellIndex] = 0;
        }
      })
    })
    return state;
  }

    const moveFunctions = times(state.length, (index) => {
      const isEven = (index + 1) % 2 !== 0;
      return isEven ? moveValuesLeftToRight : moveValuesRightToLeft;
    })

    let result = cloneDeep(state);

    moveFunctions.forEach((moveFn) => {
      result = moveFn(result);
    })

    return result;
  }
