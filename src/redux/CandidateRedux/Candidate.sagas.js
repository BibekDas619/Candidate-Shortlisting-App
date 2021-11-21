import { put, call, takeLatest, all } from 'redux-saga/effects'
import { CandidateActionTypes } from './Candidate.types'
import { apiFetchSuccess, apiFetchFailure } from './Candidate.actions'
import Axios from 'axios'
import { CandidatesUrl } from '../../Url'

export function* callApi() {
    try {
        let response = yield Axios.get(CandidatesUrl)
        let data = yield response.data
        yield put(apiFetchSuccess(data))
    } catch (error) {
        yield put(apiFetchFailure(error.message))
    }
}

export function* listenCall() {
    yield takeLatest(CandidateActionTypes.FETCH_API_START, callApi)
}

export function* allCandidateSagas() {
    yield all([
        call(listenCall)
    ])
}