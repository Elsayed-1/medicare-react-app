

import { createSlice, current } from "@reduxjs/toolkit";

const initialval={
    value:0
}

export const Allslice=createSlice({
    name:"favo",
    initialState:initialval,
    reducers:{
        addfavo:(current,action)=>{
console.log("keep going to become iron man")
        }
    }

})

export const {addfavo} =Allslice.actions
export default Allslice.reducer