
import { useTheme } from "../hooks/useTheme";


const Header = () => {
 
  const [isDark, setIsDark] = useTheme()

 
  return (
    <header className={`header-container ${isDark? 'dark' : ''}`}>
    <div className="header-content">
     <h2 className="title">Where in the world?</h2>
    <div className="theme " onClick={()=>{  setIsDark(!isDark);
      localStorage.setItem('isDarkMode', !isDark)
      
    }
    
  
  }>
     <p className="dark-theme"><i className={`fa-solid fa-${isDark? "sun" : "moon"}`} ></i>&nbsp;&nbsp;{isDark? "Light Mode" : "Dark Mode"}</p>
     <p className="light-theme"><i className="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode</p>
    </div>
    </div>
 </header>
  )
}

export default Header