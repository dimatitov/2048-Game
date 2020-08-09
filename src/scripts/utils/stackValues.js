import cloneDeep from "lodash.clonedeep";

/**
 * Стакает влево поля с одинаковыми значениями value
 * @param state
 * @returns state
 */
export const stackValues = (state) => {
  const clonedState = cloneDeep(state)

  clonedState.forEach((row) => {
    row.forEach((cell, cellIndex, cells) => {
      const nextCell = cells[cellIndex + 1]

      if (nextCell && cell === nextCell) {
        cells[cellIndex] += nextCell
        cells[cellIndex + 1] = 0
      }
    })
  })

  return clonedState
}
