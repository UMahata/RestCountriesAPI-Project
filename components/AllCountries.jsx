import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'





 
const AllCountries = ({query}) => {

    const [countriesData, setCountriesData] = useState([])
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
         .then((res) => res.json())
         .then((data)=>{
          setCountriesData(data)
          })
    },[])

   console.log(countriesData)


  return (
    countriesData?<div className="countries-container">
        { countriesData.filter((country)=>country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))
        .map((country, i)=>{
          return <CountryCard name={country.name.common}
             flag = {country.flags.svg}
             population = {country.population.toLocaleString("en-IN")}
             region = {country.region}
             capital = {country.capital}
             key = {i}
             data = {country}/>
 })
}
    </div>: <div><h1>Some Time It Takes longer time to Load <bold>for Third Party Rest APIs.</bold> please wait...</h1></div>
  )
}

export default AllCountries