import cloneDeep from "lodash.clonedeep";

/**
 * Поворачивает матрицу на 90 градусов влево
 * Алгоритм:
 *  1) Вырезать первые ячейки из каждой строки, сделать из них массив,
 *  сделать реверс этого массива и запушить в новый массив
 *  2) Повторять пока в исходном массиве еще есть ячейки
 * @param state
 * @returns {[]}
 */
export const turnMatrix90DegreesToLeft = (state) => {
  const clonedState = cloneDeep(state)
  const newState = []

  while (clonedState[0].length !== 0) {
    const newColumn = clonedState.reduce((acc, row) => {
      const firstCell = row.shift()
      return [...acc, firstCell]
    }, [])

    newState.push(newColumn.reverse())
  }

  return newState
}
