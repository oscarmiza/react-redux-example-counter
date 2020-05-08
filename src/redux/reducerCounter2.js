const initialState = {
    counter_2: 0,
}

function counter2Reducer(state = initialState, action) {
    switch (action.type) {
        
        case 'COUNTER2_RESTAR':

            return {
                ...state,
                counter_2: state.counter_2 - 1
            }
        case 'COUNTER2_SUMAR':

            return {
                ...state,
                counter_2: state.counter_2 + 1
            }

        default:
            return state;

    }
}

export default counter2Reducer
