import Accounts from "../Accounts/Accounts"
import Navbar from "../Navbar/Navbar"
import TilesBar from "../Navbar/TilesBar"

const Home = () => {
    return (
        <div>
            <Navbar />
            <TilesBar />
            <Accounts />
        </div>
    )
}
export default Home