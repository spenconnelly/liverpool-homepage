import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'

import { API_ENDPOINTS } from '../../constants'

const SportsDbApiContext = createContext()

function SportsDbApiContextProvider(props) {
    const [liverpoolData, setLiverpoolData] = useState({})
    const [isDbDataLoading, setDbDataLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async function fetchRepos() {
            try {
                const response = await fetch(API_ENDPOINTS.liverpoolSportsDb)
                const result = await response.json()
                setDbDataLoading(false)
                setLiverpoolData(result.teams[0])
            } catch (error) {
                setDbDataLoading(false)
                setError(error)
            }
        })()
    }, [])

    return (
        <SportsDbApiContext.Provider
            value={{
                liverpoolData,
                isDbDataLoading,
                error
            }}
            {...props}
        />
    )
}

export function useSportsDbApi() {
    const context = useContext(SportsDbApiContext)
    if (context === undefined) {
        throw new Error('Context must be used within a Provider')
    }
    return context
}

export default SportsDbApiContextProvider
