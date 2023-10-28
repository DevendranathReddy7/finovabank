import './Navbar.css'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { CiBank } from 'react-icons/ci'
import { AiOutlineComment, AiFillBell, AiOutlineLogout } from 'react-icons/ai'
const size = '20px'

const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <div className="title">
                    <div className='icon-div'>
                        <CiBank size={size} />
                        <h3>Finova</h3>
                    </div>
                    <div className='icon-div'>
                        <h3>Dev</h3>
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
                        <AiOutlineLogout size={size} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;