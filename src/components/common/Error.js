const Error = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.err.message}</p>
        </div>
    )
}
export default Error