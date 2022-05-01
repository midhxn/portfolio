import './index.scss'
import {Link} from 'react-router-dom'
import logoM from '../../assets/images/logo-s.png'
import logoName from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to = './'>
            <img src={logoM} alt="logo"/>
            <img src={logoName} alt="logoname"/>
        </Link>
    </div>
)

export default Sidebar