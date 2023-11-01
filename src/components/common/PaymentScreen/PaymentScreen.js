import { useEffect, useState } from "react"
import { H3, StyledOuterLi, StyledPaymnetDiv, StyledPaymnetLi } from "./StyledPaymnetInput"
import { getAccounts } from "../../../supabase/apiAccounts"
import { useAuth } from "../../../context/LoginContext"
import PaymentsAccounts from "../PaymentsAccounts"

const PaymentScreen = (props) => {
    const [accounts, setAccounts] = useState([])
    const { currentUser } = useAuth()
    useEffect(() => {
        getAccounts(currentUser.userId).then((data) => setAccounts(data))
    }, [])

    return (
        <>
            <H3>{props.title}</H3>
            <StyledPaymnetDiv>
                <StyledOuterLi>
                </StyledOuterLi>
            </StyledPaymnetDiv>
        </>
    )
}
export default PaymentScreen