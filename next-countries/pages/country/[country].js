import React from 'react'
import Header from '../../components/Header'




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

export default function country({ country }) {

    return (

        <div>
            <Header />

            <p>{country.name.common}</p>
            <p>{country.capital}</p>

        </div>
    )

}
