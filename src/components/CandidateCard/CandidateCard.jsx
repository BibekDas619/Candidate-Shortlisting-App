import { Fragment } from 'react'
import { CardWrapper, CardImage, CardText } from './CandidateCard.styles'
import { useNavigate } from 'react-router-dom'

const CandidateCard = (candidateDetails) => {

    const history = useNavigate()

    console.log(candidateDetails.status)

    const { candidateDetails: { Image, name, status, id } } = candidateDetails

    return (
        <Fragment>
            <CardWrapper key={id} onClick={() => history(`/editCandidate/${id}`)} type={status !== undefined ? status : ''}>
                <CardImage src={Image} alt="Candidate Pic" />
                <CardText>Name: {name}</CardText>
            </CardWrapper>
        </Fragment>
    )
}

export default CandidateCard