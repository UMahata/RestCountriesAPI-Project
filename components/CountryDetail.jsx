import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';


const CountryDetail = () => {
    const params =  useParams()
    const countryName = params.country

    const state = useLocation().state
    

   


   
      const[countryData , setCountryData] = useState(null)
      const[notFound, setNotFound] = useState(false)
     
      function updateCountryData(data){
        
        setCountryData({
            
            name: data.name.common,
            flag: data.flags.svg,
            nativeName:  data.name.common || {},
            population: data.population.toLocaleString("en-IN"),
            region: data.region ,
            subRegion: data.subregion,
            capital: data.capital,
            countryTLD: data.tld.join(", "),
            countryCurr: Object.values(data.currencies || {}).map((currency)=>currency.name ).join(", "),
            countryLang: Object.values(data.languages || {}).join(', '),
            borders:[] 
        })

        
        
        data.borders?.map((border)=>{
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res)=>res.json())
            .then((data)=>{
                setTimeout(setCountryData((prevState)=>({...prevState, borders: [...prevState.borders, data[0].name.common]})))
            })
        })

      }
      


  useEffect(()=>{

     if(state){
        updateCountryData(state)
     
        
     }else{
        
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res)=>res.json())
    .then((datas)=>{ 
         const data = datas[0]
       updateCountryData(data)


        }).catch((err)=>{
            console.log(err);
            setNotFound(true)
    }
        );
     }
     


        
  },[countryName])
  const [isDark] = useTheme()
  if(isDark){document.body.classList.add('dark')}
  else{
    document.body.classList.remove('dark')
  }

  if(notFound) return <h1 style={{textAlign:'center', marginTop:100}}>Wrong Url, Plaese check again </h1>

  return (countryData === null? ( 
  <main >
          {/*  this main is for skeliton frame*/}
    <div className="search-back">
        <div className="back-button" >
            <a href="#" ><i className="fa-solid fa-arrow-left"></i>&nbsp; Back</a>
        </div>
        
    </div> 
      <div className="country-details">
        <div className="country-flag skeleton">
            <img src="{countryData.flag} "alt="flag image"/>
        </div>
        <div className="details-text-container">
            <h1 className="skeleton">dsd</h1>
            <div className="details-text">
                <div className="text-first-part skeleton">
                    <p className="Native-Name">
                        <b>Native Name: </b>
                       <span>dfd</span>
                    </p>
                    <p className="Population"><b>Population: </b><span>fd</span></p>
                    <p className="Region"><b>Region: </b><span>fd</span></p>
                    <p className="Sub-Region"><b>Sub Region: </b><span>dfd</span></p>
                    <p className="Capital"><b>Capital: </b><span>fd</span></p>
                </div>
                <div className="text-second-part skeleton">
                    <p className="Top-Level-Domain"><b>Top Level Domain: </b><span>fd</span></p>
                    <p className="Currencies"><b>Currencies: </b><span>fd</span></p>
                    <p className="Languages"><b>Languages: </b><span>fd</span></p>
                </div>
                
            
            </div>
            <div className="Boder-Countries-details skeleton">
                <p><b>Border Countries: </b>
                    
                    
                    
                </p>

            </div>
        


        </div>
    </div>
   

 </main>): ( 
  
  <main >      
    <div className="search-back">
        <div className="back-button" onClick={()=> history.back()}>
            <a href="#" ><i className="fa-solid fa-arrow-left"></i>&nbsp; Back</a>
        </div>
        
    </div> 
      <div className="country-details">
        <div className="country-flag">
            <img src={countryData.flag} alt="flag image"/>
        </div>
        <div className="details-text-container">
            <h1 >{countryData.name}</h1>
            <div className="details-text">
                <div className="text-first-part ">
                    <p className="Native-Name">
                        <b>Native Name: </b>
                       <span>{countryData.nativeName}</span>
                    </p>
                    <p className="Population"><b>Population: </b><span>{countryData.population}</span></p>
                    <p className="Region"><b>Region: </b><span>{countryData.region}</span></p>
                    <p className="Sub-Region"><b>Sub Region: </b><span>{countryData.subRegion}</span></p>
                    <p className="Capital"><b>Capital: </b><span>{countryData.capital}</span></p>
                </div>
                <div className="text-second-part ">
                    <p className="Top-Level-Domain"><b>Top Level Domain: </b><span>{countryData.countryTLD}</span></p>
                    <p className="Currencies"><b>Currencies: </b><span>{countryData.countryCurr}</span></p>
                    <p className="Languages"><b>Languages: </b><span>{countryData.countryLang}</span></p>
                </div>
                
            
            </div>
            <div className="Boder-Countries-details">
            <div className="BoderCountries">
                <p className='borderBox'><b>Border Countries:&nbsp; </b>
               
                {countryData.borders
               
               .map((border) => <Link to={`/${border}`} key={border} className='border-country-box'> {border} </Link>)}

                
               
                    
                    
                </p>
                </div>

            </div>
        


        </div>
    </div>
   

 </main>)
   
  )
}

export default CountryDetail