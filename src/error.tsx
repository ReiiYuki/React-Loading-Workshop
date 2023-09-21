import { ReactNode, createContext, useState } from "react";

interface ErrorContextValue {
    error?: Error
    setError: (error?: Error) => void 
}

export const ErrorContext = createContext<ErrorContextValue>({ error: undefined , setError: () => {} })

export const ErrorContextProvider = ({ children }: Record<'children', ReactNode>) => {
    const [error, setError] = useState<Error | undefined>(undefined)

    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    )
}
