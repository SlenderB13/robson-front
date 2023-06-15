import axios, { AxiosResponse } from "axios"

export const useInsert = <T>(data: T, url: string) => {

    axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/${url}`, data)
    .then((response: AxiosResponse) => {
        console.log(response)
    })

    return data;
}