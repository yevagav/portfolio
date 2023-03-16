import Intro from '../../components/Intro/Intro'
import profilePic from '../../images/yevagav.jpg'
import styles from '../Home/Home.module.scss'

export default function Home () {
    return (
        <main className={styles.Home}>
            <Intro 
                profilePic={profilePic}
            />
        </main> 
    )
}