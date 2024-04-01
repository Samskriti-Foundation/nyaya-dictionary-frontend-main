import axios from "axios"


export const getWords = async() => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/words`)
    return response.data
}

export const getWord = async(word: string | undefined) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/words/${word}`)
    return response.data
}

export const searchWord = async(word: string | undefined) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/search/${word}`)
    return response.data
}