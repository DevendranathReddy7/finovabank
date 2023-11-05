import { useEffect, useState } from "react"
import { Footer, FooterWrapper, H3, Label, PaymentWrapper, PrimaryButton, StyledPaymentInput } from "./StyledPaymnetInput"
import { getAccounts } from "../../../../supabase/apiAccounts"
import { useAuth } from "../../../../context/LoginContext"
import PaymentsAccounts from "../../../common/PaymentsAccounts"
import AccountsModal from "../AccountsModal"
import LinkButton from "../../../common/LinkButton"
import { usePayments } from "../../../../context/paymentContext"
import { ValidationError } from "../../../common/Error"


const PaymentScreen = (props) => {
    const [isFromAccountClicked, setIsFromAccountClicked] = useState(false);
    const [isToAccountClicked, setIsToAccountClicked] = useState(false);
    const [amountCheck, setAmountCheck] = useState(false)
    const { accounts, setSelectedFromAccount, setSelectedToAccount, setEnteredAmount, paymentData } = usePayments()
    const toggleContainer = (id) => {
        if (id === 'from') {
            setIsFromAccountClicked((prev) => !prev);
            setIsToAccountClicked(false)

        } else {
            setIsToAccountClicked((prev) => !prev);
            setIsFromAccountClicked(false)
        }
    };
    const fromAccountHandler = (id) => {
        const fromAccount = accounts.filter(acct => acct.id === id)
        setSelectedFromAccount(fromAccount)
    }

    const toAccountHandler = (id) => {
        const toAccount = accounts.filter(acct => acct.id === id)
        setSelectedToAccount(toAccount)
    }

    const amountHandler = (e) => {

        if (Number(e.target.value) > paymentData.selectedFromAccount[0].funds) {
            setAmountCheck(true)
        } else {
            setEnteredAmount(e.target.value)
            setAmountCheck(false)
        }

    }

    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <H3>{props.title}</H3>
            <PaymentWrapper>
                <form onSubmit={submitHandler}>
                    <div>
                        <Label>From</Label>
                        <StyledPaymentInput type="text" placeholder={`${paymentData.selectedFromAccount[0]?.accountNumber ?? 'Select From Account'}`} onClick={() => toggleContainer('from')} />
                        {isFromAccountClicked && <AccountsModal which='From' accounts={accounts} selectedAccount={fromAccountHandler} />}
                    </div>
                    <div>
                        <Label>To</Label>
                        <StyledPaymentInput type="text" placeholder={`${paymentData.selectedToAccount[0]?.accountNumber ?? 'Select To Account'}`} onClick={() => toggleContainer('to')} />
                        {isToAccountClicked && <AccountsModal which='To' accounts={accounts} selectedAccount={toAccountHandler} />}
                    </div>
                    <div>
                        <Label>Amount</Label>
                        <StyledPaymentInput type="text" placeholder="Enter Account" sty={amountCheck.toString()} onChange={(e) => amountHandler(e)} />
                        {amountCheck && <ValidationError msg='Please enter a valid amount'></ValidationError>}
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: '3px', marginRight: '4rem' }}>
                        <LinkButton to='/review-confirm' ><PrimaryButton disabled={amountCheck}>Continue</PrimaryButton></LinkButton>
                    </div>
                </form>
            </PaymentWrapper >
        </>
    )
}
export default PaymentScreen