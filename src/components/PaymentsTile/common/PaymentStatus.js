import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { usePayments } from '../../../context/paymentContext'
const PaymentStatus = () => {
    return (
        <div style={{ backgroundColor: "lightgreen", margin: '2rem 3rem', padding: '3px 1rem' }}>
            <IoCheckmarkDoneCircleSharp /><span style={{ paddingLeft: '1rem' }}>Payment submitted</span>
        </div>
    )
}
export default PaymentStatus