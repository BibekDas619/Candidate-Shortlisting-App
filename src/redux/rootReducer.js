import { combineReducers } from 'redux'
import CandidateReducer from './CandidateRedux/Candidate.reducer'
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['candidates']
}

const rootReducer = combineReducers({
    candidates: CandidateReducer
})

export default persistReducer(persistConfig, rootReducer)