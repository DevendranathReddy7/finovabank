import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import TilesBar from "../Navbar/TilesBar"

const AppLayout = () => {
    return (
        <div>
            <Navbar />
            <TilesBar />
            <Outlet />
        </div>
    )
}
export default AppLayout