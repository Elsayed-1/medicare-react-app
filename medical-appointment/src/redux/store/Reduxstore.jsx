
import { configureStore } from "@reduxjs/toolkit";
import favoslice from "../slices/Reduxslice"

export const store=configureStore({
    reducer:{
      favo:favoslice
    }
})

 