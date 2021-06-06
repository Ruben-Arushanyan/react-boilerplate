import {combineReducers} from 'redux'

// reducers
import {sampleReducer} from './sample/reducer'
// ...
// ...

const rootReducer = combineReducers({
    sample: sampleReducer,
    // ...
    // ...
})

export {rootReducer}