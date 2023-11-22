import { useEffect, useState } from "react"
import { H3, ImgDiv, Label, PaymentWrapper, PrimaryButton, StyledAccount1stColumn, StyledPaymentInput, StyledPaymentLi, StyledSelectedAccountDiv } from "../common/StyledPaymnetInput"
import { getBiller } from "../../../supabase/apiAccounts"
import BillerModal from "./BillerModal"
import AccountsModal from "../common/AccountsModal"
import { ValidationError } from "../../common/Error"
import { useNavigate } from "react-router-dom"
import { usePayments } from "../../../context/paymentContext"

const BpayPamentScreen = () => {
    const [billers, setBillers] = useState({})
    const [newSelectedBiller, setNewSelectedBiller] = useState('')
    const [toClicked, setToClicked] = useState(false)
    const [isFromAccountClicked, setIsFromAccountClicked] = useState(false);
    const [selectedFromAccount, setSelectedFromAccount] = useState('')
    const [selectedToAccount, setSelectedToAccount] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [amountCheck, setAmountCheck] = useState(false)
    const [fromAccCheck, setFromAccCheck] = useState(false)
    const [toBillerCheck, setToBillerCheck] = useState(false)
    const { accounts, setPaymentData } = usePayments()
    const navigate = useNavigate()
    const toggleContainer = (id) => {
        if (id === 'from') {
            setIsFromAccountClicked((prev) => !prev);
            setToClicked(false)

        } else {
            setToClicked((prev) => !prev);
            setIsFromAccountClicked(false)
        }
    };


    const fromAccountHandler = (id) => {
        const fromAccount = accounts.filter(acct => acct.id === id)
        setSelectedFromAccount(fromAccount)
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
        else if (!newSelectedBiller) {
            setFromAccCheck(false)
            setToBillerCheck(true)
        }
        else if (!enteredAmount) {
            setFromAccCheck(false)
            setToBillerCheck(false)
            setAmountCheck(true)
        } else {
            setAmountCheck(false)
            setFromAccCheck(false)
            setToBillerCheck(false)
            if (enteredAmount > selectedFromAccount[0].funds) {
                setAmountCheck(true)
            } else {
                setAmountCheck(false)
                setPaymentData({ selectedFromAccount, newSelectedBiller, enteredAmount })
                navigate('/bpay-review-confirm')
            }

        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        const getBillers = async () => {
            const data = await getBiller()
            setBillers(data)
        }
        getBillers()
    }, [])


    const selectedBiller = (id) => {
        setToClicked(false)
        const biller = billers.filter(bill => bill.id === id)
        setNewSelectedBiller(biller)
    }
    return (
        <>
            <H3>Bill Payment</H3>
            <PaymentWrapper>
                <form onSubmit={submitHandler}>
                    <div>
                        <Label>From</Label>
                        <StyledPaymentLi onClick={() => toggleContainer('from')} >{
                            (selectedFromAccount !== '') ?
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

                    <StyledPaymentLi onClick={() => toggleContainer('to')} >{
                        (newSelectedBiller[0] !== undefined) ?
                            <StyledSelectedAccountDiv>
                                <div>
                                    <p style={{ marginLeft: '20px' }}><strong>{newSelectedBiller[0].billerName}</strong></p>
                                    <p style={{ marginTop: '-12px', marginLeft: '20px' }}>Code: {newSelectedBiller[0].billerCode}; <span>ref: {newSelectedBiller[0].referenceNo}</span></p>
                                </div>
                            </StyledSelectedAccountDiv> : <p style={{ margin: '20px 10px' }}>Select a Biller</p>
                    }</StyledPaymentLi>
                    {toClicked && <BillerModal billers={billers} clickedBiller={selectedBiller} />}
                    {toBillerCheck && <ValidationError msg='Please select a Biller'></ValidationError>}


                    <div>
                        <Label>Amount</Label>
                        <StyledPaymentInput type="text" placeholder="Enter Amount" sty={amountCheck.toString()} onChange={(e) => amountHandler(e)} required='required' />
                        {amountCheck && <ValidationError msg='Please enter a valid amount'></ValidationError>}
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: '3px', marginRight: '4rem' }}>
                        <PrimaryButton disabled={amountCheck} onClick={continueHandler}>Continue</PrimaryButton>
                    </div>
                </form>
            </PaymentWrapper>
        </>
    )
}
export default BpayPamentScreen