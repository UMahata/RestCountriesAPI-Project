import { useEffect, useState } from "react"

 export function useWindowSize(){
    const [winSize, setWinSize] = useState({width:window.innerWidth,hight:window.innerHeight})
  
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setWinSize({width:window.innerWidth,hight:window.innerHeight})
    })
  },[])

  return winSize
}