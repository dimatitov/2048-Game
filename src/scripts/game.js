import { getViewByMatrixState} from "./utils/getViewByMatrixState";


const initialize = () => {
  const initialState = [
    [2, 4, 8, 16],
    [32, 64, 128, 256],
    [512, 1024, 2048, 4096],
    [8192, 16384, 32768, 131072]
  ]

  const cellElement = getViewByMatrixState(initialState);
  const playfieldElement = document.getElementById('playfield');
  cellElement.forEach((cell) => {
    playfieldElement.appendChild(cell);
  })

}


initialize();





