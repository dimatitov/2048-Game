import { stackValues } from "./stackValues";
import { moveValues } from "./moveValues";

/**
 * Функция выполнения алгоритма move - stack - move
 * @param  {} moveAndStackValues
 */
export const moveAndStackValues = (state) =>
  moveValues(stackValues(moveValues(state)));
