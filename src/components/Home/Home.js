import Accounts from "../Accounts/Accounts"
import NavTileBarLayout from "../AppLayout/NavTileBarLayout"
import Navbar from "../Navbar/Navbar"
import TilesBar from "../Navbar/TilesBar"

const Home = () => {
    return (
        <div>
            <NavTileBarLayout />
            <Accounts />
        </div>
    )
}
export default Home