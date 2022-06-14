import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"
import { CountriesContext } from '../store'
import { useContext } from 'react';


export default function Header() {
    const ctx = useContext(CountriesContext)

    const switchTheme = () => {
        console.log(ctx.theme);
        if (ctx.theme === 'light') {
            ctx.setTheme('dark');
            return
        }
        ctx.setTheme('light');
      }
    return (
        <div className={styles.title} data-theme={ctx.theme}>
            <h3 className={styles.header}>
                Where in the world?</h3>
            <div >
                <FontAwesomeIcon icon={ctx.theme === "light" ? faMoon : faSun} style={{color: 'var(--text)'}} />
                <button className={styles.themeButton} onClick={switchTheme} >
                    {ctx.theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>
        </div >
    )
}
