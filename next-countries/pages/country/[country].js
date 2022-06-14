import React from 'react'
import dynamic from "next/dynamic"
import DetailPage from '../../components/DetailPage'
import { useState, useEffect, useContext } from 'react'
import { CountriesContext } from '../../store';
import { useRouter } from 'next/router'
import Header from '../../components/Header'








export default function country() {

    const [ currentCountry, setCurentCountry ] = useState();
    const ctx = useContext(CountriesContext)
    
    const router = useRouter()
    useEffect(() => {
        if (ctx.countries.length === 0) {
            router.push('/')
        }
        setCurentCountry(
            ctx.countries.find((country) => country.cca3 === router.query.country)
        )
    })
   
    return (
        <div>
        <Header />
        {
            currentCountry && <DetailPage  country={currentCountry} />
        }
            
            
        </div>
    )
 

}
