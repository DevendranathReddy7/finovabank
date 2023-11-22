import { BsCurrencyRupee } from "react-icons/bs"
import { usePayments } from "../../../context/paymentContext"
import NavTileBarLayout from "../../AppLayout/NavTileBarLayout"
import { H3, PrimaryButton } from "../common/StyledPaymnetInput"
import LinkButton from "../../common/LinkButton"



const BpayReview_Confirm = () => {
    const { paymentData, setPaymentData } = usePayments()

    const continueHandler = () => {
        setPaymentData({ ...paymentData, selectedFromAccount: [{ ...paymentData.selectedFromAccount[0], funds: paymentData.selectedFromAccount[0].funds - Number(paymentData.enteredAmount) }, ...paymentData.selectedFromAccount.slice(1)] })
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
                        <tr><b>To</b></tr>
                        <tr>Biller Name: &nbsp;{paymentData.newSelectedBiller[0].billerName}</tr>
                        <tr>Biller Code: &nbsp; {paymentData.newSelectedBiller[0].billerCode}</tr>
                        <tr>Reference Number: &nbsp; {paymentData.newSelectedBiller[0].referenceNo}</tr>
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
                    <LinkButton to='/bpay-submit'><PrimaryButton onClick={continueHandler}>Submit</PrimaryButton></LinkButton>
                </table>


            </div>
        </div>
    )
}
export default BpayReview_Confirm