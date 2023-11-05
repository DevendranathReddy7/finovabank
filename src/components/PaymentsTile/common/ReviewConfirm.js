import { usePayments } from "../../../context/paymentContext";
import NavTileBarLayout from "../../AppLayout/NavTileBarLayout"
import LinkButton from "../../common/LinkButton";
import { H3, PrimaryButton, SecondaryButton } from "./PaymentScreen/StyledPaymnetInput"
import { BsCurrencyRupee } from 'react-icons/bs'


const ReviewConfirm = () => {
    const { paymentData, setPaymentData } = usePayments()

    const continueHandler = () => {
        setPaymentData({ ...paymentData, selectedFromAccount: [{ ...paymentData.selectedFromAccount[0], funds: paymentData.selectedFromAccount[0].funds - Number(paymentData.enteredAmount) }, ...paymentData.selectedFromAccount.slice(1)], selectedToAccount: [{ ...paymentData.selectedToAccount[0], funds: paymentData.selectedToAccount[0].funds + Number(paymentData.enteredAmount) }, ...paymentData.selectedToAccount.slice(1)] })
    }
    return (
        <div>
            <NavTileBarLayout />
            <div>
                <H3>Review And Confirm</H3>
                <table style={{ display: "flex", margin: '4rem' }}>
                    <div style={{ marginRight: '4rem' }}>
                        <tr><b>From </b></tr>
                        <tr>Account: &nbsp; {paymentData.selectedFromAccount[0].accountName}</tr>
                        <tr>Account Number: &nbsp; {paymentData.selectedFromAccount[0].accountNumber}</tr>
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
                    <LinkButton to='-1'>Back</LinkButton>
                    <LinkButton to='/submit'><PrimaryButton onClick={continueHandler}>Submit</PrimaryButton></LinkButton>
                </table>


            </div>
        </div>
    )
}
export default ReviewConfirm