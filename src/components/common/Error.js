import { StyledPara } from "./StyledCommon"

const Error = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.err.message}</p>
        </div>
    )
}
export default Error

export const ValidationError = (props) => {
    return (
        <StyledPara>
            {props.msg}
        </StyledPara>
    )
}
