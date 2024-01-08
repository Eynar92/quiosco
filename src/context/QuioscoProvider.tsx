'use client'
import { useState, useEffect, createContext, ReactNode } from 'react'

const QuioscoContext = createContext<undefined>(undefined);

interface QuioscoProviderProps {
    children: ReactNode
}

const QuioscoProvider = ({ children }: QuioscoProviderProps) => {

    return (
        <QuioscoContext.Provider
            value={{

            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext;