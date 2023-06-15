import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/${url}`)
        .then((response: AxiosResponse) => {
            setData(response.data)
        })
        .catch((err) => 
        console.log(err))
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    return {data, isLoading};
}