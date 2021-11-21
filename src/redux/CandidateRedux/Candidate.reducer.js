import { CandidateActionTypes } from './Candidate.types'

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    errorMessage: undefined,
    searchField: ''
}

const CandidateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CandidateActionTypes.FETCH_API_START:
            return {
                data: [],
                isLoading: true,
                errorMessage: undefined,
                searchField: ''
            }

        case CandidateActionTypes.FETCH_API_SUCCESS:
            return {
                data: action.payload,
                isLoading: false,
                errorMessage: undefined,
                searchField: ''
            }

        case CandidateActionTypes.FETCH_API_FAILURE:
            return {
                data: [],
                isLoading: false,
                errorMessage: action.payload,
                searchField: ''
            }

        case CandidateActionTypes.ADD_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload,
            }

        case CandidateActionTypes.SHORTLISTED:

            console.log(action.payload)
            const newState = state.data.map(data => {
                if (data.id.toString() === action.payload) {
                    data.status = 'Shortlisted'
                }
                return data
            })
            console.log(newState)

            return {
                ...state,
                data: newState
            }

        case CandidateActionTypes.REJECTED:
            const newState2 = state.data.map(data => {
                if (data.id.toString() === action.payload) {
                    data.status = 'Rejected'
                }
                return data
            })

            return {
                ...state,
                data: newState2
            }

        default: return state
    }

}

export default CandidateReducer