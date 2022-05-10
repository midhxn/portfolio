import Logotitle from '../../assets/images/logom.png'
import {Link} from 'react-router-dom'
import './index.scss'

const Home = () => {
    

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I,m 
                <img src={Logotitle} alt="dev"/>
                idhun
                <br/>
                web developer </h1>
                <h2>Full Stack Developer | Javascript | Open Source</h2>
                <Link to="/contact" className='flat-button'>CONTACT Me</Link>

            
            </div>
        
        </div>
        
        );
}

export default Home;