import React from 'react'

const SelectMenu = ({setQuery}) => {
  return (
    <select name="" id="kk" className="searchbar inputRegion " onChange={(e)=>setQuery(e.target.value.toLowerCase() )}>
        <option hidden>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="europe">Europe</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="oceania">Oceania</option>
     </select>
  )
}

export default SelectMenu