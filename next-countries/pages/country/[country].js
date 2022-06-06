import React from 'react'
import Header from '../../components/Header'
import styles from '../../styles/country.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


export async function getStaticProps({ params }) {
    const results = await fetch(`https://restcountries.com/v3.1/name/${params.country}`).then(res => res.json());
    return {
        props: {
            country: results[0]
        }
    }
}

export async function getStaticPaths() {
    const countries = await fetch('https://restcountries.com/v3.1/all?field=name').then(res => res.json());

    return {
        paths: countries.map(country => {
            return {
                params: {
                    country: country.name.common.toString()
                }
            }
        }),
        fallback: false
    }
}

export default function country({ country, theme }) {
    console.log(theme)
    const currencyArray = Object.values(country.currencies)
    console.log(currencyArray);
    const languegesArray = Object.values(country.languages)
    console.log(languegesArray);
    return (

        <>
            <Header />
            <main className={styles.container} data-theme={theme}>
                <Link href="/" >
                <div >
                
                    <button className={styles.btn}>
                    <FontAwesomeIcon icon={faArrowLeftLong} style={{  marginRight: ".5rem", color:"var(--text)" }}/>
                        Back
                    </button>
                    </div>
                </Link>
                <div className={styles.image}>
                <Image src={country.flags.svg} width="300px" height="200px" layout="responsive" objectFit="cover" alt="country flag"  />
                </div>
                <div className={styles.info}>
                    <h3>{country.name.common}</h3>
                    <p><span>Native Name:</span>{country.name.official}</p>
                    <p><span>Population:</span>{country.population}</p>
                    <p><span>Region:</span>{country.region}</p>
                    <p><span>Region:</span>{country.subregion}</p>
                    <p><span>Region:</span>{country.capital}</p>
                </div>
                <div className={styles.info}>
                <p><span>Top Level Domain:</span>{country.tld}</p>
               {
                currencyArray.map(({ name }) => {
        return <p key={name}><span>Currencies:</span>{name}</p>
    })
               }

               {
                   languegesArray.map((index) => {
                       return <p key={index}><span>Languages:</span>{languegesArray}</p>
                   })
               }
                </div>
                <div className={styles.borders}>
                <span>Border Countries:</span>
                <div className={styles.borderBtns}>
                {
                    
                    
                    country.borders.map((border,index) => {
                        
                    return (
                      <button key={index} className={styles.btn}>{border}</button>
                     )
                     })
                     
                }
                </div>
                </div>
            </main>
            
            

        </>
    )

}
