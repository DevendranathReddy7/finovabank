import { useEffect, useState } from "react"
import { Footer, FooterWrapper, H3, Label, PaymentWrapper, PrimaryButton, StyledPaymentInput } from "./StyledPaymnetInput"
import { getAccounts } from "../../../../supabase/apiAccounts"
import { useAuth } from "../../../../context/LoginContext"
import PaymentsAccounts from "../../../common/PaymentsAccounts"
import AccountsModal from "../AccountsModal"

const PaymentScreen = (props) => {
    const [accounts, setAccounts] = useState([])
    const [isContainerVisible, setContainerVisible] = useState(false);
    const { currentUser } = useAuth()

    const toggleContainer = () => {
        setContainerVisible(!isContainerVisible);
    };

    useEffect(() => {
        getAccounts(currentUser.userId).then((data) => setAccounts(data))
    }, [])

    return (
        <>
            <H3>{props.title}</H3>
            <PaymentWrapper>
                <div>
                    <Label>From</Label>
                    <StyledPaymentInput type="text" placeholder="Select From Account" onClick={toggleContainer} />
                    {isContainerVisible && <AccountsModal accounts={accounts} />}
                </div>
                <div>
                    <Label>To</Label>
                    <StyledPaymentInput type="text" placeholder="Select To Account" onClick={toggleContainer} />
                    {isContainerVisible && <AccountsModal accounts={accounts} />}
                </div>
                <div>
                    <Label>Amount</Label>
                    <StyledPaymentInput type="text" placeholder="Enter Account" />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: '3px', marginRight: '4rem' }}>
                    {/* <FooterWrapper> */}
                    <footer>
                        <PrimaryButton>Continue</PrimaryButton>
                    </footer>
                    {/* </FooterWrapper> */}
                </div>

            </PaymentWrapper >
        </>
    )
}
export default PaymentScreen