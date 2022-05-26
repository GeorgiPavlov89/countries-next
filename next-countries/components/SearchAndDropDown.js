import React from 'react'
import styles from '../styles/SearchAndDD.module.css'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

export default function SearchAndDropDown({ title, regions, multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open)

    function handleOnClick(region) { }
    return (
        <div className={styles.container}>
            <form className={styles.search}>
                <FontAwesomeIcon icon={faSearch} style={{ color: "#9ca3af", marginLeft: "1.5rem" }} />
                <input name="query" type="search" placeholder="Search for a country..." />
            </form>
            <div className={styles.ddWraper}>
                <div
                    className={styles.ddHeader}
                    tabIndex={0}
                    role="button"
                    onKeyPress={() => toggle(!open)}
                    onClick={() => toggle(!open)}
                >
                    <div className={styles.ddHeader__title}>
                        <p>{title}</p>
                    </div>
                    <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
                </div>
                {
                    open && (
                        <ul className={styles.ddList}>
                            {
                                regions.map(region => (
                                    <li key={region.id} >
                                        <button className={styles.listButton} type="button" onClick={() => handleOnClick(region)}>
                                            <span>{region.value}</span>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    )
}
