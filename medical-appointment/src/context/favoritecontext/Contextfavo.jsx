import { createContext, useContext, useEffect, useState } from "react";


const contextfavo=createContext();

export function FavoritesProvider({children}){
    const [favo,setFavo]=useState(()=>{
        const save =localStorage.getItem("favodata")
        return save?JSON.parse(save):[]
    } )

    useEffect(()=>{
        localStorage.setItem("favodata",JSON.stringify(favo))
         },[favo])

    const toggle=(object)=>{
        setFavo((prev)=>{
          const isexist=  prev.find((eve)=>eve.id===object.id)
          if(isexist){
            return prev.filter((eve)=>eve.id !== object.id)
          }
          else{
             return [...prev,object]
          }
        })
    }
    return(
        <contextfavo.Provider value={{favo,toggle}}>
{children}
        </contextfavo.Provider>
    )
}

export function usefavorites(){
    return useContext(contextfavo)
}
