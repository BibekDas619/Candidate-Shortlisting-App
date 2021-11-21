import { CandidateActionTypes } from './Candidate.types'

export const apiFetchStart = () => ({
    type: CandidateActionTypes.FETCH_API_START
})

export const apiFetchSuccess = (data) => ({
    type: CandidateActionTypes.FETCH_API_SUCCESS,
    payload: data
})


export const apiFetchFailure = (error) => ({
    type: CandidateActionTypes.FETCH_API_FAILURE,
    payload: error
})

export const addSearcField = (searchField) => ({
    type: CandidateActionTypes.ADD_SEARCH_FIELD,
    payload: searchField
})

export const changeStatusToShortlisted = (candidateId) => ({
    type: CandidateActionTypes.SHORTLISTED,
    payload: candidateId
})

export const changeStatusToRejected = (candidateId) => ({
    type: CandidateActionTypes.REJECTED,
    payload: candidateId
})