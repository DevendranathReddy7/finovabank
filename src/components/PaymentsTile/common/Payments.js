import { useEffect, useState } from "react"
import { getPaymnetTypes } from "../../../supabase/apiAccounts"
import Loader from "../../common/Loader"
import { Hr, StyledDiv, StyledLi } from "./StyledPayments"
import LinkButton from "../../common/LinkButton"
import { useAuth } from "../../../context/LoginContext"

const Payments = () => {
    const { currentUser } = useAuth()
    const [eligiblePayments, setEligiblePayments] = useState([])

    useEffect(() => {
        getPaymnetTypes(currentUser.userId).then((data) => setEligiblePayments(data))
    }, [currentUser.userId])
    return (
        <div>
            {eligiblePayments.length === 0 && <Loader />}
            <div>
                {eligiblePayments[0]?.paymentTypes.map(payment => <StyledLi key={payment.id}>
                    <StyledDiv>
                        <img src={payment.icon} style={{ height: '50px' }} alt="icon" />
                        <Hr />
                        <LinkButton to={payment.path}>{payment.payment}</LinkButton>
                    </StyledDiv>
                </StyledLi>
                )}
            </div>
        </div>
    )
}
export default Payments