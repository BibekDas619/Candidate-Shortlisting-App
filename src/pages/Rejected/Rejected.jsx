import { Fragment } from 'react'
import { connect } from 'react-redux'
import { RejectedWrapper } from './Rejected.styles'
import CandidateCard from '../../components/CandidateCard/CandidateCard'

const Rejected = ({ candidates }) => {

    const allRejectedCandidates = candidates.filter(data => {
        if (data.status !== undefined && data.status === 'Rejected') {
            return data
        }
    })
    return (
        <Fragment>
            <RejectedWrapper>
                {
                    allRejectedCandidates.length === 0 ? <center><h1>No Rejected Candidates Yet :)</h1></center> :
                        allRejectedCandidates.map(candidate => <CandidateCard candidateDetails={candidate} />)
                }
            </RejectedWrapper>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    candidates: state.candidates.data
})

export default connect(mapStateToProps)(Rejected)