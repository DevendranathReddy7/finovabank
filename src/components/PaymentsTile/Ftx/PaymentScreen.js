import { useState } from "react"
import { H3, ImgDiv, Label, PaymentWrapper, PrimaryButton, StyledAccount1stColumn, StyledPaymentInput, StyledPaymentLi, StyledSelectedAccountDiv } from "../common/StyledPaymnetInput"
import AccountsModal from "../common/AccountsModal"
import { usePayments } from "../../../context/paymentContext"
import { ValidationError } from "../../common/Error"
import { useNavigate } from "react-router-dom"



const PaymentScreen = () => {
    const [isFromAccountClicked, setIsFromAccountClicked] = useState(false);
    const [isToAccountClicked, setIsToAccountClicked] = useState(false);
    const [selectedFromAccount, setSelectedFromAccount] = useState('')
    const [selectedToAccount, setSelectedToAccount] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [amountCheck, setAmountCheck] = useState(false)
    const [fromAccCheck, setFromAccCheck] = useState(false)
    const [toAccCheck, setToAccCheck] = useState(false)
    const { accounts, setPaymentData } = usePayments()
    const navigate = useNavigate()
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

        if ((Number(e.target.value) <= 0)) {
            setAmountCheck(true)
        } else if (e.target.value === '') {
            setAmountCheck(true)
        } else {
            setEnteredAmount(e.target.value)
            setAmountCheck(false)
        }
    }

    const continueHandler = () => {

        if (!selectedFromAccount) {
            setFromAccCheck(true)
        }
        else if (!selectedToAccount) {
            setFromAccCheck(false)
            setToAccCheck(true)
        }
        else if (!enteredAmount) {
            setFromAccCheck(false)
            setToAccCheck(false)
            setAmountCheck(true)
        } else {
            setAmountCheck(false)
            setFromAccCheck(false)
            setToAccCheck(false)
            if (enteredAmount > selectedFromAccount[0].funds) {
                setAmountCheck(true)
            } else {
                setAmountCheck(false)
                setPaymentData({ selectedFromAccount, selectedToAccount, enteredAmount })
                navigate('/review-confirm')
            }

        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <H3>Funds Transfer</H3>
            <PaymentWrapper>
                <form onSubmit={submitHandler}>
                    <div>
                        <Label>From</Label>
                        <StyledPaymentLi sty={fromAccCheck.toString()} onClick={() => toggleContainer('from')} >{
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
                                </StyledSelectedAccountDiv> : <p style={{ margin: '20px 10px' }}>Select from account</p>
                        }</StyledPaymentLi>
                        {isFromAccountClicked && <AccountsModal which='From' accounts={accounts} selectedAccount={fromAccountHandler} acc={selectedToAccount} />}
                        {fromAccCheck && <ValidationError msg='Please select a From account'></ValidationError>}

                    </div>
                    <div>
                        <Label>To</Label>
                        <StyledPaymentLi sty={toAccCheck.toString()} onClick={() => toggleContainer('to')} >{
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
                                </StyledSelectedAccountDiv> : <p style={{ margin: '20px 10px' }}>Select to account</p>
                        }</StyledPaymentLi>
                        {isToAccountClicked && <AccountsModal which='To' accounts={accounts} selectedAccount={toAccountHandler} acc={selectedFromAccount} />}
                        {toAccCheck && <ValidationError msg='Please select a To account'></ValidationError>}


                    </div>
                    <div>
                        <Label>Amount</Label>
                        <StyledPaymentInput type="text" placeholder="Enter Amount" sty={amountCheck.toString()} onChange={(e) => amountHandler(e)} required='required' />
                        {amountCheck && <ValidationError msg='Please enter a valid amount'></ValidationError>}
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: '3px', marginRight: '4rem' }}>
                        <PrimaryButton disabled={amountCheck} onClick={continueHandler}>Continue</PrimaryButton>
                    </div>
                </form>
            </PaymentWrapper >
        </>
    )
}
export default PaymentScreen