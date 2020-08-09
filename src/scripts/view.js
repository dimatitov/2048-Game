// view -> controller -> model(state) -> view
import { reaction, autorun, toJS } from 'mobx'
import { state } from './state'

reaction(
  () => state.matrix.flat().map(cell => cell),
  () => {
    console.log('change state', toJS(state.matrix))
  },
)

