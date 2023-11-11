import { useState } from "react"
import { H3, ImgDiv, Label, PaymentWrapper, PrimaryButton, StyledAccount1stColumn, StyledPaymentInput, StyledPaymentLi, StyledSelectedAccountDiv } from "./StyledPaymnetInput"
import AccountsModal from "../AccountsModal"
import LinkButton from "../../../common/LinkButton"
import { usePayments } from "../../../../context/paymentContext"
import { ValidationError } from "../../../common/Error"


const PaymentScreen = (props) => {
    const [isFromAccountClicked, setIsFromAccountClicked] = useState(false);
    const [isToAccountClicked, setIsToAccountClicked] = useState(false);
    const [selectedFromAccount, setSelectedFromAccount] = useState('')
    const [selectedToAccount, setSelectedToAccount] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [amountCheck, setAmountCheck] = useState(false)
    const { accounts, setPaymentData } = usePayments()

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

        if (Number(e.target.value) > selectedFromAccount[0].funds) {
            setAmountCheck(true)
        } else if ((Number(e.target.value) <= 0)) {
            setAmountCheck(true)
        } else {
            setEnteredAmount(e.target.value)
            setAmountCheck(false)
        }
    }

    const submitHandler = () => {
        setPaymentData({ selectedFromAccount, selectedToAccount, enteredAmount })
    }
    return (
        <>
            <H3>{props.title}</H3>
            <PaymentWrapper>
                <form>
                    <div>
                        <Label>From</Label>
                        <StyledPaymentLi aria-label="select from account" onClick={() => toggleContainer('from')} >{
                            (selectedFromAccount !== '' && Object.keys(selectedFromAccount[0]).length > 0) ?
                                <StyledSelectedAccountDiv>
                                    <StyledAccount1stColumn>
                                        <ImgDiv src={selectedFromAccount[0].icon} />
                                        <div>
                                            <p >{selectedFromAccount[0].accountName}</p>
                                            <p style={{ marginTop: '-12px' }}>{selectedFromAccount[0].accountNumber}</p>
                                        </div>
                                    </StyledAccount1stColumn>
                                    <StyledAccount1stColumn>
                                        <div>
                                            <p >Funds</p>
                                            <p style={{ marginTop: '-12px' }}>{selectedFromAccount[0].funds}</p>
                                        </div>
                                    </StyledAccount1stColumn>
                                </StyledSelectedAccountDiv> : <p style={{ margin: '24px 10px' }}>Select from account</p>
                        }</StyledPaymentLi>
                        {isFromAccountClicked && <AccountsModal which='From' accounts={accounts} selectedAccount={fromAccountHandler} />}
                    </div>
                    <div>
                        <Label>To</Label>
                        <StyledPaymentLi aria-label="select to account" onClick={() => toggleContainer('to')} >{
                            (selectedToAccount !== '' && Object.keys(selectedToAccount[0]).length > 0) ?
                                <StyledSelectedAccountDiv>
                                    <StyledAccount1stColumn>
                                        <ImgDiv src={selectedToAccount[0].icon} />
                                        <div>
                                            <p>{selectedToAccount[0].accountName}</p>
                                            <p style={{ marginTop: '-12px' }}>{selectedToAccount[0].accountNumber}</p>
                                        </div>
                                    </StyledAccount1stColumn>
                                    <StyledAccount1stColumn>
                                        <div>
                                            <p>Funds</p>
                                            <p style={{ marginTop: '-12px' }}>{selectedToAccount[0].funds}</p>
                                        </div>
                                    </StyledAccount1stColumn>
                                </StyledSelectedAccountDiv> : <p style={{ margin: '24px 10px' }}>Select to account</p>
                        }</StyledPaymentLi>
                        {isToAccountClicked && <AccountsModal which='To' accounts={accounts} selectedAccount={toAccountHandler} />}
                    </div>
                    <div>
                        <Label>Amount</Label>
                        <StyledPaymentInput type="text" placeholder="Enter Account" sty={amountCheck.toString()} onChange={(e) => amountHandler(e)} required='required' />
                        {amountCheck && <ValidationError msg='Please enter a valid amount'></ValidationError>}
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: '3px', marginRight: '4rem' }}>
                        <LinkButton to='/review-confirm' ><PrimaryButton disabled={amountCheck} onClick={submitHandler}>Continue</PrimaryButton></LinkButton>
                    </div>
                </form>
            </PaymentWrapper >
        </>
    )
}
export default PaymentScreen