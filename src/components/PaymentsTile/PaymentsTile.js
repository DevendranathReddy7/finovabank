import { Outlet } from "react-router-dom"
import AppLayout from "../AppLayout/AppLayout"
import NavTileBarLayout from "../AppLayout/NavTileBarLayout"
import Payments from "./Payments"

const PaymentsTile = () => {
    return (
        <div>
            <NavTileBarLayout />
            <Outlet />
            <Payments />
        </div>
    )
}
export default PaymentsTile