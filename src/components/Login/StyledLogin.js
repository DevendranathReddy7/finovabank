import styled from "styled-components";

export const StyledInput = styled.input`
margin: ${(props) => (props.crn ? '13rem 30rem 0.5rem 20rem;' : '2rem 30rem 20px 20rem;')};
height: 2rem;
width: 18rem;
@media (max-width: 480px) {
    margin: ${(props) => (props.crn ? '13rem 30rem 0.5rem 2rem;' : '2rem 30rem 20px 2rem;')};

}
@media (max-width: 780px) {
    margin: ${(props) => (props.crn ? '13rem 30rem 0.5rem 5rem;' : '2rem 30rem 20px 5rem;')};
}
`
export const StyledButton = styled.button`
margin:  1.3rem 30rem 20px 20rem;
height: 2.5rem;
width: 18.5rem;
background-color:rgb(40, 70, 158);
border-style:none;
color:white;
font-weight:bold;
@media (max-width: 480px) {
    margin:  1.3rem 30rem 20px 2rem;
}
@media (max-width: 780px) {
    margin:  1.3rem 30rem 20px 5rem;}
`
export const StyledDivLogin = styled.div`
    margin-left:1rem;
    height: 78vh;
`
