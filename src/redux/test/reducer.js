import actions from "./actions"

const initialState = {
    counter: 0
}

export default function testReducer(state = initialState, action) {
    switch (action.type) {
        case actions.INCREMENT:{
            return{
                ...state,
                counter: state.counter + 1
            }
        }
        case actions.DECREMENT:{
            return{
                ...state,
                counter: state.counter - 1
            }
        }
        default:
            return state
    }
}