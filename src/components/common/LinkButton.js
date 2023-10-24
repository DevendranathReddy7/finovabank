import { Link, useNavigate } from "react-router-dom"
const LinkButton = ({ children, to }) => {
    const navigate = useNavigate()
    if (to === '-1') return (<button style={{ color: 'white', textDecoration: 'none' }} onClick={() => navigate(-1)}>{children}</button>)
    return (


        <Link to={to} style={{ color: 'white', textDecoration: 'none' }}>{children}</Link>

    )
}
export default LinkButton