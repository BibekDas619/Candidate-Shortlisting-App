import { Fragment } from 'react'
import { connect } from 'react-redux'
import { ShortlistedWrapper } from './Shortlisted.styles'
import CandidateCard from '../../components/CandidateCard/CandidateCard'

const Shortlisted = ({ candidates }) => {

    const allShortlistedCandidates = candidates.filter(data => {
        if (data.status !== undefined && data.status === 'Shortlisted') {
            return data
        }
    })
    return (
        <Fragment>
            <ShortlistedWrapper>
                {
                    allShortlistedCandidates.length === 0 ? <center><h1>No Shortlisted Candidates Yet :)</h1></center> :
                        allShortlistedCandidates.map(candidate => <CandidateCard candidateDetails={candidate} />)
                }
            </ShortlistedWrapper>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    candidates: state.candidates.data
})

export default connect(mapStateToProps)(Shortlisted)