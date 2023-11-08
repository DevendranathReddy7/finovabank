import styled from "styled-components";


// export const StyledPaymnetLi = styled.li`
// height:3rem;
// width:49.5rem;
// list-style-type:none;
// margin: 1rem;
// `

// export const StyledOuterLi = styled.li`
// height:3rem;
// width:49.5rem;
// list-style-type:none;
// border-style:solid;
// margin: 1rem;
// `

// export const StyledPaymnetDiv = styled.div`
// margin:2% 5% 2% 19%;
// `
export const H3 = styled.h3`
margin-left:2.2rem;`

export const PaymentWrapper = styled.div`
border-style:solid;
margin:1rem 2rem;
padding:0.5rem;
border-radius: 3px;
border-width: 2px;

`
export const StyledPaymentLi = styled.li`
border-style:solid;
list-style-type:none;
border-radius:3px;
border-width: 1px;
height: 4.3rem;
width: 90%;
margin:1rem 3rem;
border-color:${(props) => props.sty === "true" ? 'red' : 'black'};
`
export const StyledPaymentInput = styled.input`
border-style:solid;
list-style-type:none;
border-radius:3px;
border-width: 1px;
height: 3rem;
width: 90%;
margin:1rem 3rem;
border-color:${(props) => props.sty === "true" ? 'red' : 'black'};
`
export const StyledSelectedAccountDiv = styled.div`
display: flex;
`
export const StyledAccount1stColumn = styled.div`
display: flex;
margin-right:20rem;
@media (max-width:1030px) {
    margin-right:15rem;
    
}
@media (max-width:780px) {
    margin-right:10rem;
    
}
`
export const ImgDiv = styled.img`
margin:20px 20px;
height:35px;
`
export const Label = styled.label`
display:block;
margin-left:3rem;
margin-bottom:-7px;
`

export const FooterWrapper = styled.div`
display: "flex";
justify-content:"flex-end";
padding: '3px';
margin-right: '4rem';
`
export const Footer = styled.footer`

`
export const PrimaryButton = styled.button`
background-color:rgb(0,125,186);
padding:10px 15px;
border:none;
border-radius:3px;
color: white;
`
export const SecondaryButton = styled.button`
background-color:transparent;
padding:10px 15px;
border:solid skyblue;
border-radius:3px;
margin-right: 3rem;
color: black;
`