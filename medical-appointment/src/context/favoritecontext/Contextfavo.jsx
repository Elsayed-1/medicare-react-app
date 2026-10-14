import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../AuthContext/Authenticationcxt";


const contextfavo=createContext();

export function FavoritesProvider({children}){

     const {user}=useAuth()

     const localStoragekey=user?.email ?`favoritedata_${user.email}`:"favoritedata_guest"
      
    const [favo,setFavo]=useState(()=>{
        const save =localStorage.getItem(localStoragekey)
        return save?JSON.parse(save):[]
    } )
//لما اغير حسابي هعرف منين اجيب الداتا القديمه من الداله الي تحت دي هتجيب بناءا علي المفتاح وتعتمد عل تغير المستخدم
    useEffect(()=>{
        const save=localStorage.getItem(localStoragekey)
        setFavo(save?JSON.parse(save):[])
    },[user?.email])
////////////////////////////////////
    useEffect(()=>{
        localStorage.setItem(localStoragekey,JSON.stringify(favo))
         },[favo,localStoragekey])

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
