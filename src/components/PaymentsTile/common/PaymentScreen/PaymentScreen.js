import { useEffect, useState } from "react"
import { Footer, FooterWrapper, H3, Label, PaymentWrapper, PrimaryButton, StyledPaymentInput } from "./StyledPaymnetInput"
import { getAccounts } from "../../../../supabase/apiAccounts"
import { useAuth } from "../../../../context/LoginContext"
import PaymentsAccounts from "../../../common/PaymentsAccounts"
import AccountsModal from "../AccountsModal"
import LinkButton from "../../../common/LinkButton"

const PaymentScreen = (props) => {
    const [accounts, setAccounts] = useState([])
    const [isFromAccountClicked, setIsFromAccountClicked] = useState(false);
    const [isToAccountClicked, setIsToAccountClicked] = useState(false);

    const { currentUser } = useAuth()

    const toggleContainer = (id) => {
        if (id === 'from') {
            setIsFromAccountClicked((prev) => !prev);
            setIsToAccountClicked(false)

        } else {
            setIsToAccountClicked((prev) => !prev);
            setIsFromAccountClicked(false)
        }
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
                    <StyledPaymentInput type="text" placeholder="Select From Account" onClick={() => toggleContainer('from')} />
                    {isFromAccountClicked && <AccountsModal which='From' accounts={accounts} modalOpen={isFromAccountClicked} />}
                </div>
                <div>
                    <Label>To</Label>
                    <StyledPaymentInput type="text" placeholder="Select To Account" onClick={() => toggleContainer('to')} />
                    {isToAccountClicked && <AccountsModal which='To' accounts={accounts} modalOpen={isToAccountClicked} />}
                </div>
                <div>
                    <Label>Amount</Label>
                    <StyledPaymentInput type="text" placeholder="Enter Account" />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: '3px', marginRight: '4rem' }}>
                    <LinkButton to='/review-confirm'><PrimaryButton>Continue</PrimaryButton></LinkButton>
                </div>

            </PaymentWrapper >
        </>
    )
}
export default PaymentScreen