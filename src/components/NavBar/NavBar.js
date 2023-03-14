import { Link } from 'react-router-dom'

import styles from '../NavBar/NavBar.module.scss'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li> <Link to='/' className='home-link'>Home</Link> </li>
                <li> <Link to='/about'>About</Link></li>
                <li><a>Resume</a></li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

