import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"



export default function Header({ theme, switchTheme }) {

    return (
        <div className={styles.title}>
            <h3 className={styles.header}>
                Where in the world?</h3>
            <div >
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
                <button className={styles.themeButton} onClick={switchTheme}>
                    {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>
        </div >
    )
}
