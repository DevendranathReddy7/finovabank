import { useEffect, useState } from "react"
import { usePayments } from "../../../context/paymentContext"
import NavTileBarLayout from "../../AppLayout/NavTileBarLayout"
import LinkButton from "../../common/LinkButton"
import { H3, PrimaryButton, SecondaryButton } from "./PaymentScreen/StyledPaymnetInput"
import PaymentStatus from "./PaymentStatus"
import { BsCurrencyRupee } from 'react-icons/bs'

const Submit = () => {
    const [AccountAfterPayment, setAccountAfterPayment] = useState()
    const { paymentData, setPaymentData } = usePayments()
    console.log(paymentData)
    useEffect(() => {
        const newFunds = paymentData.selectedFromAccount[0].funds - Number(paymentData.enteredAmount)
        const creditFunds = paymentData.selectedToAccount[0].funds + Number(paymentData.enteredAmount)
    }, [])

    return (
        <div>
            <NavTileBarLayout />
            <H3>Confirmation</H3>
            <PaymentStatus />
            <div>
                <table style={{ display: "flex", margin: '4rem' }}>
                    <div style={{ marginRight: '4rem' }}>
                        <tr><b>From </b></tr>
                        <tr>Account: &nbsp; {paymentData.selectedFromAccount[0].accountName}</tr>
                        <tr>Account Number: &nbsp; {paymentData.selectedFromAccount[0].accountNumber}</tr>
                        <tr>Available Funds: &nbsp; {paymentData.selectedFromAccount[0].funds}</tr>
                    </div>
                    <div>
                        <tr><b>To</b> &nbsp; {paymentData.selectedToAccount[0].name}</tr>
                        <tr>Account: &nbsp; {paymentData.selectedToAccount[0].accountName}</tr>
                        <tr>Account Number: &nbsp; {paymentData.selectedToAccount[0].accountNumber}</tr>
                    </div>
                </table>
                <table style={{ display: "flex", margin: '4rem' }}>
                    <div>
                        <th>
                            Amount <BsCurrencyRupee />{paymentData.enteredAmount}
                        </th>
                    </div>
                </table>
                <table style={{ display: "flex", margin: '4rem' }}>
                    <LinkButton to='/home'><SecondaryButton>Back</SecondaryButton></LinkButton>
                </table>


            </div>
        </div>
    )
}
export default Submit