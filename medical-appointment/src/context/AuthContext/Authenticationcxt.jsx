import { createContext, useContext, useState } from "react";


const Authcontext=createContext();

export function Authprovider({children}){

const [user,setUser]=useState(()=>{
    const saveduser=localStorage.getItem("midicare_user")
    return saveduser?JSON.parse(saveduser):null
})

const login =(userdata)=>{

    setUser(userdata)
    localStorage.setItem("midicare_user", JSON.stringify(userdata))
}


const logout =()=>{
    setUser(null)
    localStorage.removeItem("midicare_user")
}

return(

<Authcontext.Provider value={{user,login,logout,setUser,islogged:!!user}}>
    {children}
</Authcontext.Provider>


)
 }


 export function useAuth(){
    return useContext(Authcontext)
 }
