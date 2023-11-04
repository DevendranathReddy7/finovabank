import { Link, useNavigate } from "react-router-dom"
import { SecondaryButton } from "../PaymentsTile/common/PaymentScreen/StyledPaymnetInput"
const LinkButton = ({ children, to }) => {
    const navigate = useNavigate()
    if (to === '-1') return (<SecondaryButton onClick={() => navigate(-1)}>{children}</SecondaryButton>)
    return (
        <Link to={to} style={{ color: 'Black', textDecoration: 'none', fontWeight: 'bold' }} >{children}</Link>

    )
}
export default LinkButton