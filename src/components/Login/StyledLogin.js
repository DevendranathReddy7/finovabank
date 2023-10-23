import styled from "styled-components";

export const StyledInput = styled.input`
margin: ${(props) => (props.crn ? '13rem 30rem 0.5rem 20rem;' : '2rem 30rem 20px 20rem;')};
height: 2rem;
width: 18rem;


`
export const StyledButton = styled.button`
margin:  1.3rem 30rem 20px 20rem;
height: 2.5rem;
width: 18.5rem;
background-color:rgb(40, 70, 158);
border-style:none;
color:white;
font-weight:bold
`

