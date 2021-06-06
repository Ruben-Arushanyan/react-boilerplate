import {reducersCreator} from 'redux-cool'

const initialState = {
    loading: false,
    data: null
}

const sampleReducer = reducersCreator(
    'SAMPLE',
    initialState,
    {
        FETCH: {
            START: (state) => {
                state.loading = true
            },
            SUCCESS: (state, action) => {
                const [data] = action.args
                state.data = data
                state.loading = false
            },
            FAIL: (state) => {
                state.loading = false
            }
        },
        RESET: () => {
            return initialState
        }
    }
)


export {sampleReducer}
