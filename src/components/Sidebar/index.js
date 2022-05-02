import './index.scss'
import {Link,NavLink} from 'react-router-dom'
import logoM from '../../assets/images/logo-s.png'
import logoName from '../../assets/images/logosub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faRobot,faEnvelope,faCode} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to = "/">
            <img src={logoM} alt="logo"/>
            <img className="sub-logo" src={logoName} alt="logoname"/>
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about" to="/about">
                <FontAwesomeIcon icon={faRobot} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="projects" to="/projects">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="contact" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink> 
        </nav>
    </div>
)

export default Sidebar