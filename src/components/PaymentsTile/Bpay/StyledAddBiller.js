import styled from "styled-components";

export const StyledAdBillerInput = styled.input`
margin:  1rem 30rem 20px 3rem;
border-style:solid;
list-style-type:none;
border-radius:3px;
border-width: 1px;
height: 3.0rem;
width: 90%;
margin:1rem 3rem;
`
export const StyledFilter = styled.input`
border-style:solid;
list-style-type:none;
border-radius:3px;
border-width: 1px;
height: 2.5rem;
width: ${(props) => props.manageBiller ? '50%' : '70%'};
margin: ${(props) => props.manageBiller ? '1rem 0.5rem 1rem 15rem' : '1rem 0.5rem 1rem 0.8rem'};
&&::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const Styledli = styled.li`
list-style-type:none;
margin-left:15rem;
display: flex;
justify-content:space-between;
width:65.5%;
`
export const BillerColumn = styled.div`
display: inline-flex;
margin-right:2rem;
`
export const Button = styled.button`
background-color:rgb(0,125,186);
border:none;
padding:15px;
border-radius:3px;
margin-right:53px;
color: white;
`