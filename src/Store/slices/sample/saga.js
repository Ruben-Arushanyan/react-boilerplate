import {all, takeLatest} from 'redux-saga/effects'
import {actionsCreator} from 'redux-cool'

function* sampleFetch() {
    // ...
    // ...
}

function* mainSaga() {
    yield all([
        takeLatest(actionsCreator.SAMPLE.FETCH, sampleFetch),
        // ...
        // ...
    ])
}

export {mainSaga}
