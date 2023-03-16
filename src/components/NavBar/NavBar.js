import { useNavigate } from 'react-router-dom'

import styles from '../NavBar/NavBar.module.scss'

export default function NavBar() {
const nav = useNavigate()

    const handleHomeNav = () => {
        nav('/')
    }

    const handleAboutNav = () => {
        nav('/about')
    }

    return (
            <nav className={styles.nav}>
                    <div className={styles.navLink} onClick={() => { handleHomeNav() }}>
                    HOME</div>
                    <div className={styles.navLink} onClick={() => { handleAboutNav() }}>ABOUT</div>
                    <div className={styles.navLink}><a>RESUME</a></div>
                    <div className={styles.navLink}>CONTACT</div>
               
            </nav>
    )
}

