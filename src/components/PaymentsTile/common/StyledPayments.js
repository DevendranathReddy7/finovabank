import styled from "styled-components";

//Payment
export const StyledLi = styled.li`
list-style-type:none;
border-style:solid;
display: inline-flex;
justify-content: center;
border-radius: 4px;

@media (max-width: 478px) {
margin:1rem 3rem;
width: 75%;
}

@media (min-width: 479px) and (max-width: 779px) {
margin:1rem 3rem;
width: 30%;
}
@media (min-width: 780px) and (max-width: 1023px ){
margin:1rem;
width: 25%;
}
@media (min-width: 1024px) {
margin:2rem;
width: 25%;
}

`
//icon
export const StyledDiv = styled.div`
display: inline;
justify-content: center;
align-items: center;
padding:20px;
`

export const Hr = styled.hr`

@media (max-width: 479px) {
width: 15rem;
}
@media (min-width: 479px) and (max-width: 780px) {
width: 7rem;
}
@media (min-width: 780px) and (max-width: 1023px ){
width: 10rem;
}
@media (min-width: 1024px) {
width: 13rem;
}
`