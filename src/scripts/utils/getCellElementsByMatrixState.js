export const getCellElementsByMatrixState = (state) => {
  return state
    .flat()
    .map((cell) => {
      const cellElement = document.createElement('div');
      if (cell !== 0) {
        cellElement.textContent = `${cell}`;
        cellElement.classList.add('thing', `t${cell}`)
      } else {
        cellElement.classList.add('t0')
      }
      return cellElement;
    })
}
