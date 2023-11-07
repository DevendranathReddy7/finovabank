import NavTileBarLayout from "../AppLayout/NavTileBarLayout"
import PaymentScreen from "./common/PaymentScreen/PaymentScreen"


const BillPayment = () => {
    return (
        <div>
            <NavTileBarLayout />
            <PaymentScreen title='Bill Payment' />
        </div>
    )
}
export default BillPayment