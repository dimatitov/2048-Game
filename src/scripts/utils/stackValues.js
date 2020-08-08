import cloneDeep from 'lodash.clonedeep';


/**
 * Стакаем если цифры совпадают. Алгоритм сравнения 1и2 2и3 3и4.
 * @param  {Перебираем массивы в матрице} column.forEach
 * @param  {Создаем переменную слудующей ячейки(в данном случае перебор с лева на право)} cells[cellIndex+1]
 * @param  {Делаем проверку есть ли сл. ячейка и равена ли левая ячейка парвой} if(nextCell&&cell.value===nextCell.value)
 * @param  {При true левая ячейка складывается с правой. Результат записывается в левую} cell.value+=nextCell.value
 * @param  {Правая равна нулю}  nextCell.value=0
 */
export const stackValues = (state = []) => {
  const clonedState = cloneDeep(state);

  clonedState.forEach((row) => {
    row.forEach((cell, cellIndex, cells) => {
      const nextCell = cells[cellIndex + 1];

      if(nextCell && cell === nextCell) {
        cells[cellIndex] += nextCell;
        cells[cellIndex + 1] = 0;
      }
    })
  })

  return clonedState;
}
