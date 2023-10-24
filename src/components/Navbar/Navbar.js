import './Navbar.css'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { CiBank } from 'react-icons/ci'
import { AiOutlineComment, AiFillBell, AiOutlineLogout } from 'react-icons/ai'


const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <div className="title">
                    <div className='icon-div'>
                        <CiBank size={'30px'} />
                        <h3>Finova</h3>
                    </div>
                    <div className='icon-div'>
                        <h3>Dev</h3>
                    </div>


                </div>

                <div className="quickLinks">
                    <div className='icon-div'>
                        <AiOutlineComment size={'25px'} />
                    </div>

                    <div className='icon-div'>
                        <AiFillBell size={'25px'} />
                    </div>

                    <div className='icon-div'>
                        <IoMailUnreadOutline size={'25px'} />
                    </div>

                    <div className='icon-div'>
                        <AiOutlineLogout size={'25px'} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;