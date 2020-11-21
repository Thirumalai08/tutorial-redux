import { BUY_ICECREAM } from './iceCreamTypes'

const initialState = {
  numOfIce: 20
}

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIce: state.numOfIce - 1
    }

    default: return state
  }
}

export default iceCreamReducer