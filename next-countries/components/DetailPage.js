import React from 'react'
import Header from '../components/Header'
import styles from '../styles/DetailPage.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useContext } from "react"
import { CountriesContext } from '../store';




export default function DetailPage({ country }) {
    const ctx = useContext(CountriesContext);
   console.log(country);
   console.log(ctx);
    const currencyArray = Object.values(country.currencies)
    console.log(currencyArray);
    const languegesArray = Object.values(country.languages)
    console.log(languegesArray);

    return (

        <>

            <main className={styles.container} data-theme={ctx.theme} >
                <Link href="/"  >
                <div >

                    <button className={styles.btn}>
                    <FontAwesomeIcon icon={faArrowLeftLong} style={{  marginRight: ".5rem", color:"var(--text)" }}/>
                        Back
                    </button>
                    <div className={styles.image}>
                <Image src={country.flags.svg} width="300px" height="200px" layout="responsive" objectFit="cover" alt="country flag"  />
                </div>
                    </div>
                </Link>
                <div className={styles.info__container}>
                <div className={styles.info}>
                    <h3>{country.name.common}</h3>
                    <p><span>Native Name:</span>{country.name.official}</p>
                    <p><span>Population:</span>{country.population}</p>
                    <p><span>Region:</span>{country.region}</p>
                    <p><span>Sub Region:</span>{country.subregion}</p>
                    <p><span>Capital:</span>{country.capital}</p>
                </div>
                <div className={styles.info}>
                <p><span>Top Level Domain:</span>{country.tld}</p>
               {
                currencyArray.map(({ name }) => {
        return <p key={name}><span>Currencies:</span>{name}</p>
    })
               }
                   <p className={styles.languages}>Languages:
                   {
                   languegesArray.map((language) => {
                       return <span key={language}>{language}</span>
                   })

               }
               </p>
                </div>
                <div className={styles.borders}>
                <span>Border Countries:</span>
                <div className={styles.borderBtns}>
                {


               country.borders   &&  country.borders.map((border, index) => {

                    return (
                        <Link href={`${border}`} key={border} passHref>
                      <button  className={styles.btn} >{border}</button>
                      </Link>
                     )
                     })

                }
                </div>
                </div>
                </div>
            </main>



        </>
    )

}
