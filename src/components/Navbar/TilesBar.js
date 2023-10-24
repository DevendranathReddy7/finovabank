import { AiFillHome } from 'react-icons/ai'
import LinkButton from '../common/LinkButton'
import { Link } from 'react-router-dom'
import { StyledNav } from './StyledNav'
const TilesBar = () => {
    return (
        <div style={{ backgroundColor: 'rgb(182, 197, 241)', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '15px' }}>
            <StyledNav>
                <LinkButton><Link to='/home'><AiFillHome /></Link></LinkButton>
            </StyledNav>
            <StyledNav>
                <LinkButton to='/payments'>Payments</LinkButton>
            </StyledNav>
            <StyledNav>
                <LinkButton to='/settings'>Settings</LinkButton>
            </StyledNav>
        </div>
    )
}
export default TilesBar