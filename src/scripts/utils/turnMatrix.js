import cloneDeep from 'lodash.clonedeep';

/**
 * Алгритм поворота матрици. Берем первые элементы каждого массива
 * и переносим в новый массив(поворот на 90 градусов).
 */
export const turnMatrix = (state) => {
  const clonedState = cloneDeep(state);
  let newState = [];

  while(clonedState[0].length !== 0) {
    const newColumn = clonedState.reduce((acc, row) => {
      const firstCell = row.shift();
      return [...acc, firstCell]
    }, [])
    newState.push(newColumn.reverse());
  }
  return newState;
}
