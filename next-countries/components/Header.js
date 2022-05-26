import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-regular-svg-icons"

export default function Header() {
    return (
        <div className={styles.title}>
            <h3 className={styles.header}>
                Where in the world?</h3>
            <div >
                <FontAwesomeIcon icon={faMoon} />
                <button className={styles.themeButton} >
                    Dark Mode
                </button>
            </div>
        </div>
    )
}
