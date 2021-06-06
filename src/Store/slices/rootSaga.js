import {all} from 'redux-saga/effects'

// sagas
import {mainSaga as sampleSaga} from './sample/saga'
// ...
// ...

function* rootSaga() {
    yield all([
        sampleSaga(),
        // ...
        // ...
    ])
}

export {rootSaga}