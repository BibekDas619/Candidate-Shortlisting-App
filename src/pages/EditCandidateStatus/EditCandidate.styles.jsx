import styled from "styled-components";

const buttonColor = props => {
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

export const EditButton = styled.button`
width: 50%
font-size: 25px;
padding: 10px;
border: 1px solid black;
flex: 1;
text-align: center;
margin: 5px;
cursor: pointer;
${buttonColor}
`