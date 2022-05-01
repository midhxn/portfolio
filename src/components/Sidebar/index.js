import './index.scss'
import logoM from '../../assets/images/logo-s.png'
import logoName from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <link className='logo' to = './'>
            <img src={logoM} alt="logo"/>
            <img src={logoName} alt="logoname"/>
        </link>
    </div>
)

export default Sidebar