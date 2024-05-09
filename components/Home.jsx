import React, { useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import AllCountries from './AllCountries'

import { useTheme } from '../hooks/useTheme'

const Home = () => {
  const [isDark] = useTheme()






 
  if(isDark){document.body.classList.add('dark')}
  else{
    document.body.classList.remove('dark')
  }

  const [query, setQuery] = useState('')
  return (
    <>
    <main>
    <div className="search-country-option">
    <SearchBar setQuery={setQuery}/>
    <SelectMenu setQuery={setQuery}/>
    </div>
    <AllCountries query = {query}/>
    </main>
   
   
    </>
  )
}

export default Home