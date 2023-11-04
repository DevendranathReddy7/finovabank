import { usePayments } from "../../../context/paymentContext";
import NavTileBarLayout from "../../AppLayout/NavTileBarLayout"
import LinkButton from "../../common/LinkButton";
import { H3, PrimaryButton, SecondaryButton } from "./PaymentScreen/StyledPaymnetInput"
import { BsCurrencyRupee } from 'react-icons/bs'


const ReviewConfirm = () => {
    const { selectedFromAccount, selectedToAccount, enteredAmount } = usePayments()
    console.log(selectedFromAccount, selectedToAccount, enteredAmount)
    return (
        <div>
            <NavTileBarLayout />
            <div>
                <H3>Review And Confirm</H3>
                <table style={{ display: "flex", margin: '4rem' }}>
                    <div style={{ marginRight: '4rem' }}>
                        <tr><b>From </b></tr>
                        <tr>Account: &nbsp; {selectedFromAccount[0].accountName}</tr>
                        <tr>Account Number: &nbsp; {selectedFromAccount[0].accountNumber}</tr>
                    </div>
                    <div>
                        <tr><b>To</b> &nbsp; {selectedToAccount[0].name}</tr>
                        <tr>Account: &nbsp; {selectedToAccount[0].accountName}</tr>
                        <tr>Account Number: &nbsp; {selectedToAccount[0].accountNumber}</tr>
                    </div>
                </table>
                <table style={{ display: "flex", margin: '4rem' }}>
                    <div>
                        <th>
                            Amount <BsCurrencyRupee />{enteredAmount}
                        </th>
                    </div>
                </table>
                <table style={{ display: "flex", margin: '4rem' }}>
                    <LinkButton to='-1'>Back</LinkButton>
                    <LinkButton to='/confirm'><PrimaryButton>Submit</PrimaryButton></LinkButton>
                </table>


            </div>
        </div>
    )
}
export default ReviewConfirm