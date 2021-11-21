import { call, all } from 'redux-saga/effects'
import { allCandidateSagas } from './CandidateRedux/Candidate.sagas'

export function* rootSaga() {
    yield all([
        call(allCandidateSagas)
    ])
}