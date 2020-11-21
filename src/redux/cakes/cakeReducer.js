const { BUY_CAKE } = require("./cakeTypes")

// state
const intialState = {
    numOfCakes: 10
}

// reducer function
const cakeReducer = (state=intialState,action) => {
    switch(action.type){
        case BUY_CAKE: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
            default: return state
    }
}

export default cakeReducer