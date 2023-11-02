import styled from "styled-components";

// export const Center = styled.center`
// font-weight:bolder;
// font-size:2rem;
// margin-top:5rem;
// `
export const StyledInput = styled.input`
margin: ${(props) => (props.crn ? '13rem 30rem 0.5rem 20rem;' : '2rem 30rem 20px 20rem;')};
height: 2rem;
width: 18rem;
@media (max-width: 480px) {
    margin: ${(props) => (props.crn ? '13rem 30rem 0.5rem 2rem;' : '2rem 30rem 20px 2rem;')};

}
@media (min-width: 480px) {
    margin: ${(props) => (props.crn ? '13rem 30rem 0.5rem  15rem;' : '2rem 30rem 20px 25rem;')};
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
@media (min-width: 480px) {
    margin:  1.3rem 30rem 20px 25rem;}
`
export const StyledDivLogin = styled.div`
    margin-left:1rem;
    height: 78vh;
`
