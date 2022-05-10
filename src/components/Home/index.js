import Logotitle from '../../assets/images/logom.png'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
import './index.scss'
import LetterAnimation from '../LetterAnimation';

const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'd', 'h', 'u', 'n']
    const jobArray = ['w', 'e', 'b',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() =>{
        return setTimeout(() =>{
        setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/> 
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _12`}>,m</span>
                <img src={Logotitle} alt="dev"/>
                <LetterAnimation letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <LetterAnimation letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Full Stack Developer | Javascript | Open Source</h2>
                <Link to="/contact" className='flat-button'>CONTACT Me</Link>

            
            </div>
        
        </div>
        
        );
}

export default Home;