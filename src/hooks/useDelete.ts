import axios, { AxiosResponse } from "axios"

export const useDelete = (url: string, id?: number) => {

    axios.delete(`${import.meta.env.VITE_REACT_APP_BASE_URL}/${url}/${id}`)
    .then((response: AxiosResponse) => {
        console.log(response)
    })

    return;
}