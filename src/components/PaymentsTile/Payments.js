import { useEffect, useState } from "react"
import { getPaymnetTypes } from "../../supabase/apiAccounts"
import Loader from "../common/Loader"
import { StyledDiv, StyledLi } from "./StyledPayments"
import LinkButton from "../common/LinkButton"

const Payments = () => {
    const [eligiblePayments, setEligiblePayments] = useState([])

    useEffect(() => {
        console.log('in effect')
        getPaymnetTypes().then((data) => setEligiblePayments(data))
    }, [])

    return (
        <div>
            {eligiblePayments.length === 0 && <Loader />}
            <div>
                {eligiblePayments.map(payment => <StyledLi key={payment.id}>
                    <StyledDiv>
                        <img src={payment.icon} style={{ height: '50px' }} />
                        <hr style={{ width: '15rem' }} />
                        <LinkButton to={payment.path}>{payment.paymentType}</LinkButton>
                    </StyledDiv>
                </StyledLi>
                )}
            </div>
        </div>
    )
}
export default Payments