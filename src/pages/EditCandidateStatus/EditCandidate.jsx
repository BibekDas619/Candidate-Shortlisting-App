import { Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeStatusToRejected, changeStatusToShortlisted } from '../../redux/CandidateRedux/Candidate.actions'
import { EditButton } from './EditCandidate.styles'

const EditCandidate = ({ allCandidates, shortlisted, rejected }) => {

    const history = useNavigate()

    const { id } = useParams()

    const specificCandidateDetails = allCandidates.filter(data => data.id === id)[0]

    return (
        <Fragment>
            <center>
                <h1>{specificCandidateDetails.name}</h1>
                <img src={specificCandidateDetails.Image} alt="Candidate Image" /><br />
                {
                    specificCandidateDetails.status === undefined ?
                        (
                            <>
                                <EditButton type="Shortlisted" onClick={() => {
                                    shortlisted(id)
                                    history('/')
                                }}>Shortlisted</EditButton>
                                <EditButton type="Rejected" onClick={() => {
                                    rejected(id)
                                    history('/')
                                }}>Rejected</EditButton>
                            </>
                        )
                        :
                        specificCandidateDetails.status === 'Shortlisted' ? (
                            <>
                                <EditButton type="Rejected" onClick={() => {
                                    rejected(id)
                                    history('/')
                                }}>Rejected</EditButton>
                            </>
                        ) : (
                            <>
                                <EditButton type="Shortlisted" onClick={() => {
                                    shortlisted(id)
                                    history('/')
                                }}>Shortlisted</EditButton>
                            </>
                        )
                }
            </center>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    allCandidates: state.candidates.data
})

const mapDispatchToProps = dispatch => ({
    shortlisted: (id) => dispatch(changeStatusToShortlisted(id)),
    rejected: (id) => dispatch(changeStatusToRejected(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCandidate)