import React from 'react'
import styles from '../styles/SearchAndDD.module.css'
import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

export default function SearchAndDropDown({ title, regions, multiSelect = false, handleSearch, searchRef, setSelectRegion }) {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open)
    const dropdown = useRef(null)

    function handleSelectRegion(region) {
        setSelectRegion(region.value)

    }

    useEffect(() => {
        if (!open) return;
        function handleCloseDropdown(e) {
            if (dropdown.current && !dropdown.current.contains(e.target)) {
                setOpen(false)
            }
        }
        window.addEventListener("click", handleCloseDropdown);
        return () => window.removeEventListener("click", handleCloseDropdown);

    }, [open])


    return (
        <div className={styles.container}>
            <div className={styles.search} >
                <FontAwesomeIcon icon={faSearch} style={{ color: "#9ca3af", marginLeft: "1.5rem" }} />
                <input

                    ref={searchRef}
                    onKeyDown={handleSearch}
                    name="query"
                    type="search"
                    placeholder="Search for a country..." />
            </div>
            <div className={styles.ddWraper}>
                <div
                    className={styles.ddHeader}
                    tabIndex={0}
                    role="button"
                    onKeyPress={() => toggle(!open)}
                    onClick={() => toggle(!open)}
                    ref={dropdown}
                >
                    <div className={styles.ddHeader__title}>
                        <p>{title.length > 0 ? title : "Filter by Region"}</p>
                    </div>
                    <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
                </div>
                {
                    open && (
                        <ul className={styles.ddList}>
                            {
                                regions.map(region => (
                                    <li key={region.id} >
                                        <button className={styles.listButton} type="button" onClick={() => handleSelectRegion(region)}>
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
