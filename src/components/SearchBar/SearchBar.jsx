import { Fragment } from 'react'
import { SearchBarInput, SearchBarWrapper } from './SearchBar.styles'
import { addSearcField } from '../../redux/CandidateRedux/Candidate.actions'
import { connect } from 'react-redux'

const SearchBar = ({ addSearcField }) => {


    return (
        <Fragment>
            <SearchBarWrapper>
                <SearchBarInput type="text" placeholder="Search Candidate By Name" onChange={(event) => addSearcField(event.target.value)} />
            </SearchBarWrapper>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addSearcField: (searchField) => dispatch(addSearcField(searchField)),
})

export default connect(null, mapDispatchToProps)(SearchBar)