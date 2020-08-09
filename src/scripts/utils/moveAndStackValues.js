import { moveValues } from "./moveValues";
import { stackValues } from './stackValues'

/**
 * Двигает и стакает значения в матрице
 * Алгоритм: move -> stack -> move
 * @param state
 * @returns {state}
 */
export const moveAndStackValues = (state) =>
  moveValues(stackValues(moveValues(state)))
