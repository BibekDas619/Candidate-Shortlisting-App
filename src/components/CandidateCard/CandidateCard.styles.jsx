import styled from 'styled-components'

const wrapperType = props => {
    console.log(props)
    if (props.type === 'Shortlisted') {
        return `
        background-color: green;
        color: white;
        `
    }
    else {
        if (props.type === 'Rejected') {
            return `
            background-color: red;
            color: white;
            `
        }
    }
}

export const CardWrapper = styled.div`
border: 1px solid #888888;
border-radius: 50px;
display: flex;
flex-direction: row;
width: 350px;
box-shadow: 5px 5px 5px #888888;
margin: 5px;
cursor: pointer;
${wrapperType}
`

export const CardImage = styled.img`
height: 200px;
width: 200px;
border-radius: 50px;
`

export const CardText = styled.span`
margin-top: 20%;
margin-left: 1%;
font-size: 18px;
`