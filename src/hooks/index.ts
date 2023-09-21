import { useContext, useState } from "react"
import { possibleErrorApi, slowApi } from "../api"
import { ErrorContext } from "../error"

function usePerformWithLoading<Params extends any[], Result>(apiCaller: (...params: Params) => Result) {
    const [loading, setLoading] = useState(false)
    const { setError } = useContext(ErrorContext)

    return [loading, async (...params: Params) => {
        try {
            setLoading(true)
            const response = await apiCaller(...params)

            return response
        } catch(error) {
            setError(error as Error)
        }finally {
            setLoading(false)
        }
    }] as const
}

export function usePerformSlowApi() {
    return usePerformWithLoading(slowApi)
}

export function usePerformPossibleErrorApi() {
    return usePerformWithLoading(possibleErrorApi)
}

// const [loading, caller] = usePerformWithLoading((text: string) => 1)
