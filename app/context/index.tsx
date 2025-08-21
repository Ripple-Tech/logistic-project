'use client'

import { initialBlogFormData } from "@/data";
import { BlogFormData } from "@/lib/types"
import {  Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

type ContextType = {
  formData : BlogFormData;
  setFormData: Dispatch<SetStateAction<BlogFormData>>;
}

const initialState = {
  formData: initialBlogFormData,
  setFormData : () => {},
}

export const GlobalContext = createContext<ContextType>(initialState)

export default function GlobalState({children} : {children : ReactNode}) {
  const [formData, setFormData ] = useState(initialBlogFormData)
  

    return <GlobalContext.Provider value={{ formData, setFormData  }}>
      {children}
    </GlobalContext.Provider>
}