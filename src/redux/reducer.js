const initialState = {
    count: 0,
    count2:0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SUMAR':

            return {
                ...state,
                count: state.count + 1
            }
        case 'RESTAR':

            return {
                ...state,
                count: state.count - 1
            }
        case 'RESTAR_COUNTER2':

            return {
                ...state,
                count2: state.count2 - 1
            }
        case 'SUMAR_COUNTER2':

            return {
                ...state,
                count2: state.count2 + 1
            }

        default:
            return state;

    }
}

export default reducer
