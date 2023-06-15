import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/${url}`)
        .then((response: AxiosResponse) => {
            setData(response.data)
        })
    }, [])

    return data;
}