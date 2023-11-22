import { BsCurrencyRupee } from "react-icons/bs"
import NavTileBarLayout from "../../AppLayout/NavTileBarLayout"
import { H3, SecondaryButton } from "../common/PaymentScreen/StyledPaymnetInput"
import PaymentStatus from "../common/PaymentStatus"
import LinkButton from "../../common/LinkButton"
import { usePayments } from "../../../context/paymentContext"
import { useAuth } from "../../../context/LoginContext"
import { useEffect } from "react"
import { updateFromRows } from "../../../supabase/apiAccounts"

const BpaySubmit = () => {
    const { paymentData } = usePayments()
    const { currentUser } = useAuth()
    useEffect(() => {

        const updateRow = async () => {
            const fromAccountFunds = await paymentData.selectedFromAccount[0].funds
            const enteredAmount = await paymentData.enteredAmount
            const newFromFunds = Number(fromAccountFunds) - Number(enteredAmount)
            const data = await updateFromRows(currentUser.userId, paymentData, newFromFunds)

        }
        updateRow()
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
                    <LinkButton to='/home'><SecondaryButton>Back</SecondaryButton></LinkButton>
                </table>


            </div>
        </div>
    )
}
export default BpaySubmit