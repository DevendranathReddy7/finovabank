import { useEffect, useState } from "react"
import { H3, StyledPaymnetDiv, StyledPaymnetInput, StyledPaymnetSelect } from "./StyledPaymnetInput"
import { getAccounts } from "../../../supabase/apiAccounts"
import { useAuth } from "../../../context/LoginContext"

const PaymentScreen = (props) => {
    const [accounts, setAccounts] = useState([])
    const { currentUser } = useAuth()
    useEffect(() => {
        console.log('in effect')
        getAccounts(currentUser.userId).then((data) => setAccounts(data))
    }, [])
    console.log(accounts)
    return (
        <>
            <H3>{props.title}</H3>
            <StyledPaymnetDiv>
                <label style={{ display: "block" }}>From Account:</label>
                <StyledPaymnetSelect id="dropdown" name="Account">
                    {accounts.map(account =>
                        <option>{account.accountNumber}</option>
                    )}
                </StyledPaymnetSelect>
                <label style={{ display: "block" }}>To Account:</label>
                <StyledPaymnetSelect id="dropdown" name="Account">
                    {accounts.map(account => <option>
                        {account.accountNumber}
                    </option>)}
                </StyledPaymnetSelect>
                <label style={{ display: "block" }}>Amount:</label>

                <StyledPaymnetInput></StyledPaymnetInput>
            </StyledPaymnetDiv>
        </>
    )
}
export default PaymentScreen