import styled from "styled-components";

export const CustomModal = styled.div`
position: fixed;
top: 2rem;
left: 20rem;
right: 20rem;
bottom: 2rem;
background-color: #f8fafc;
display: flex;
overflow-y:auto;
overflow-x:hidden;
padding: 13px 3px 3px 5px;
border-radius: 5px;
display:block;
min-width:300px;
`

export const StyledLi = styled.li`
list-style-type:none;
/* border-style: solid; */
background-color: transparent;
margin:1px 14px;
`
export const ListItem = styled.div`
display: inline-flex;
justify-content: space-between;
width: 100%;
`

export const FirstColumn = styled.div`
display: inline-flex;
margin-right:2rem;
`
export const ImgDiv = styled.img`
margin:15px 20px;
`
export const AccountNameDiv = styled.div`
display:inline-block;
justify-content: flex-start;
`