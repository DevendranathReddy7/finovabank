import './Navbar.css'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { CiBank } from 'react-icons/ci'
import { AiOutlineComment, AiFillBell, AiOutlineLogout } from 'react-icons/ai'
import { useContext } from 'react'
import { AuthContext } from '../../context/LoginContext'
import { useNavigate } from 'react-router-dom'
const size = '20px'

const Navbar = () => {
    const { currentUser, logout, setLoginError } = useContext(AuthContext)
    const navigate = useNavigate()
    const logoutHandle = () => {
        const yes = window.confirm('Are you sure that you want to logout?')
        if (yes) {
            logout()
            navigate('/')
            setLoginError('')
        }
    }
    return (
        <>
            <div className="nav-container">
                <div className="title">
                    <div className='icon-div'>
                        <CiBank size={size} />
                        <h3>Finova</h3>
                    </div>
                    <div className='icon-div'>
                        <h3>{currentUser.name}</h3>
                    </div>
                </div>

                <div className="quickLinks">
                    <div className='icon-div'>
                        <AiOutlineComment size={size} />
                    </div>

                    <div className='icon-div'>
                        <AiFillBell size={size} />
                    </div>

                    <div className='icon-div'>
                        <IoMailUnreadOutline size={size} />
                    </div>

                    <div className='icon-div'>
                        <AiOutlineLogout size={size} onClick={logoutHandle} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;