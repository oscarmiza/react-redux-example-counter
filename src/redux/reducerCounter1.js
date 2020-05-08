const initialState = {
    counter_1: 0,
}

function counter1Reducer(state = initialState, action) {
    switch (action.type) {
        
        case 'COUNTER1_RESTAR':

            return {
                ...state,
                counter_1: state.counter_1 - 1
            }
        case 'COUNTER1_SUMAR':

            return {
                ...state,
                counter_1: state.counter_1 + 1
            }

        default:
            return state;

    }
}

export default counter1Reducer
