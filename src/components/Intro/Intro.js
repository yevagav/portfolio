import styles from '../Intro/Intro.module.scss'

export default function Intro({ profilePic }) {
    return (
        <div className={styles.intro}>
            <img className={styles.profilePic} src={profilePic} alt="profilepic" />
            <aside>
                <h1 className={styles.name}>Hi, I'm Yeva</h1>
                <p className={styles.info}>Full Stack Software Engineer with an eye for minimalistic design.</p>
            </aside>
        </div>
    )
}