import { Fragment } from 'react'
import { HeaderTabsWrapper, HeaderTabsContainer, TabStyle } from './Header.styles'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const history = useNavigate()

    return (
        <Fragment>
            <HeaderTabsWrapper>
                <HeaderTabsContainer>
                    <TabStyle type="Shortlisted" onClick={() => history('/shortlisted')}>Shortlisted</TabStyle>
                    <TabStyle type="Rejected" onClick={() => history('/rejected')}>Rejected</TabStyle>
                </HeaderTabsContainer>
            </HeaderTabsWrapper>
        </Fragment>
    )
}

export default Header