import { useEffect, useState } from "react"
import { getPaymnetTypes } from "../../supabase/apiAccounts"
import Loader from "../common/Loader"
import { StyledDiv, StyledLi } from "./StyledPayments"
import LinkButton from "../common/LinkButton"

const Paymnets = () => {
    const [paymentTypes, setPaymnetTypes] = useState([])

    useEffect(() => {
        getPaymnetTypes().then((data) => setPaymnetTypes(data))
    }, [])
    return (
        <div>
            {paymentTypes.length === 0 && <Loader />}
            <div>
                {paymentTypes[0].paymentTypes.map(payment => <StyledLi>
                    <StyledDiv>
                        <img src={payment.icon} />
                        <hr />
                        <h3>{payment.payment}</h3>
                        <LinkButton to={payment.path}>{payment.payment}</LinkButton>
                    </StyledDiv>
                </StyledLi>)}
            </div>
        </div>
    )
}
export default Paymnets