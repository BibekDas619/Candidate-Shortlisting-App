import { Fragment, useEffect } from 'react'
import CandidateCard from '../../components/CandidateCard/CandidateCard'
import { AllStudentsContainer, LoadingScreenStyles, InvalidSearchStyles } from './Home.styles'
import { connect } from 'react-redux'
import { apiFetchStart } from '../../redux/CandidateRedux/Candidate.actions'
import Loader from "react-loader-spinner";
import SearchBar from '../../components/SearchBar/SearchBar'
import Header from '../../components/Header/Header'

const Home = ({ candidates, isFetching, apiFetchStart, searchField }) => {

    console.log(candidates)

    const filteredCandidates = candidates.filter(candidate => {
        if (searchField === '') {
            return candidate
        }
        else if (candidate.name.toLowerCase().includes(searchField.toLowerCase())) {
            return candidate
        }
    }).map(data => data)

    useEffect(() => {
        if (localStorage.length !== 1) {
            apiFetchStart()
        }
    }, [])

    return (
        <Fragment>
            <Header />
            <SearchBar />
            {
                isFetching ?
                    <LoadingScreenStyles>
                        <Loader
                            type="Puff"
                            color="black"
                            height={75}
                            width={75}
                        />
                    </LoadingScreenStyles> :

                    filteredCandidates.length === 0 ?

                        <InvalidSearchStyles>
                            <h1>Sorry no matching results are found!</h1>
                        </InvalidSearchStyles>
                        :
                        <AllStudentsContainer>
                            {
                                filteredCandidates.map(candidate => <CandidateCard candidateDetails={candidate} />)
                            }
                        </AllStudentsContainer>

            }
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    candidates: state.candidates.data,
    isFetching: state.candidates.isLoading,
    searchField: state.candidates.searchField
})

const mapDispatchToProps = (dispatch) => ({
    apiFetchStart: () => dispatch(apiFetchStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
