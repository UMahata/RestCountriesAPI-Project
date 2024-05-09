import React from 'react'

const SearchBar = ({setQuery}) => {
  return (
    <div className="searchbar">
    <input onChange={(e)=>setQuery(e.target.value.toLowerCase())} type="text" placeholder="Search Country..." />
    <a href="#" className="Search-Button"><i className="fa-solid fa-magnifying-glass"></i></a>
    </div>
  )
}

export default SearchBar