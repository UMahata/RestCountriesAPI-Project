
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

import './style.css'
import './components/country.css'
import {  ThemeProvider } from './contexts/ThemeContext'



const App = () => {
 

 
  return (
    
      <ThemeProvider>
     <Header />
     <Outlet />
     </ThemeProvider>
   
    
  )
}

export default App