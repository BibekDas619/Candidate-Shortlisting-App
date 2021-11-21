import styled from 'styled-components'

export const HeaderTabsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const HeaderTabsContainer = styled.div`
font-size: 25px;
padding: 10px;
border-radius: 10px;
width: 90%;
margin-bottom: 20px;
margin-top: 10px;
display: flex;
flexDirection: row;
`

const tabColor = props => {
    if (props.type === 'Shortlisted') {
        return `
          color: white;
          background-color: green;
        `
    }
    else {
        return `
          color: white;
          background-color: red;
        `
    }
}

export const TabStyle = styled.div`
  width: 50%
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  flex: 1;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  ${tabColor}
`