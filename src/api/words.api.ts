import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

type TWord = {
  id: number
  sanskrit_word: string
  english_transliteration: string
  meaning_ids: number[]
}

type TMeaning = {
  id: number
  meaning: string
  sanskrit_word_id: number
}

type TSynonym = {
  synonym: string
  id: number
  meaning_id: number
  sanskrit_word_id: number
}

type TAntonym = {
  antonym: string
  id: number
  meaning_id: number
  sanskrit_word_id: number
}

type TEtymology = {
  id: number
  meaning_id: number
  etymology: string
  sanskrit_word_id: number
}

type TDerivation = {
  derivation: string
  id: number
  sanskrit_word_id: number
  meaning_id: number
}

type TTranslation = {
  language: string
  translation: string
  id: number
  sanskrit_word_id: number
  meaning_id: number
}

type TExample = {
  example_sentence: string
  applicable_modern_context: string
  id: number
  sanskrit_word_id: number
  meaning_id: number
}

type TNyayaTextReference = {
  source: string
  description: string
  id: number
  sanskrit_word_id: number
  meaning_id: number
}

export const getWords = async () => {
  const response = await api.get("/words")
  return response.data
}

export const useGetWordsQuery = () => {
  return useQuery<TWord[]>({
    queryKey: ["words"],
    queryFn: () => getWords(),
  })
}

export const getWord = async (word: string) => {
  const response = await api.get(`/words/${word}`)
  return response.data
}

export const useGetWordQuery = (word: string) => {
  return useQuery<TWord>({
    queryKey: ["word", word],
    queryFn: () => getWord(word),
  })
}

export const searchWord = async (word: string) => {
  const response = await api.get(`/search/${word}`)
  return response.data
}

export const getMeaning = async (word: string, meaning_id: number) => {
  const response = await api.get(`/words/${word}/meanings/${meaning_id}`)
  return response.data
}

export const useGetMeaningQuery = (word: string, meaning_id: number) => {
  return useQuery<TMeaning>({
    queryKey: ["meaning", word, meaning_id],
    queryFn: () => getMeaning(word, meaning_id),
  })
}

export const getSynonyms = async (word: string, meaning_id: number) => {
  const response = await api.get(`/words/${word}/${meaning_id}/synonyms`)
  return response.data
}

export const useGetSynonymsQuery = (word: string, meaning_id: number) => {
  return useQuery<TSynonym[]>({
    queryKey: ["synonyms", word, meaning_id],
    queryFn: () => getSynonyms(word, meaning_id),
  })
}

export const getAntonyms = async (word: string, meaning_id: number) => {
  const response = await api.get(`/words/${word}/${meaning_id}/antonyms`)
  return response.data
}

export const useGetAntonymsQuery = (word: string, meaning_id: number) => {
  return useQuery<TAntonym[]>({
    queryKey: ["antonyms", word, meaning_id],
    queryFn: () => getAntonyms(word, meaning_id),
  })
}

export const getEtymologies = async (word: string, meaning_id: number) => {
  const response = await api.get(`/words/${word}/${meaning_id}/etymologies`)
  return response.data
}

export const useGetEtymologiesQuery = (word: string, meaning_id: number) => {
  return useQuery<TEtymology[]>({
    queryKey: ["etymologies", word, meaning_id],
    queryFn: () => getEtymologies(word, meaning_id),
  })
}

export const getDerivations = async (word: string, meaning_id: number) => {
  const response = await api.get(`/words/${word}/${meaning_id}/derivations`)
  return response.data
}

export const useGetDerivationsQuery = (word: string, meaning_id: number) => {
  return useQuery<TDerivation[]>({
    queryKey: ["derivations", word, meaning_id],
    queryFn: () => getDerivations(word, meaning_id),
  })
}

export const getTranslations = async (word: string, meaning_id: number) => {
  const response = await api.get(`/words/${word}/${meaning_id}/translations`)
  return response.data
}

export const useGetTranslationsQuery = (word: string, meaning_id: number) => {
  return useQuery<TTranslation[]>({
    queryKey: ["translations", word, meaning_id],
    queryFn: () => getTranslations(word, meaning_id),
  })
}

export const getExamples = async (word: string, meaning_id: number) => {
  const response = await api.get(`/words/${word}/${meaning_id}/examples`)
  return response.data
}

export const useGetExamplesQuery = (word: string, meaning_id: number) => {
  return useQuery<TExample[]>({
    queryKey: ["examples", word, meaning_id],
    queryFn: () => getExamples(word, meaning_id),
  })
}

export const getNyayaTextReferences = async (
  word: string,
  meaning_id: number
) => {
  const response = await api.get(
    `/words/${word}/${meaning_id}/nyaya-text-references`
  )
  return response.data
}

export const useGetNyayaTextReferencesQuery = (
  word: string,
  meaning_id: number
) => {
  return useQuery<TNyayaTextReference[]>({
    queryKey: ["nyaya-text-references", word, meaning_id],
    queryFn: () => getNyayaTextReferences(word, meaning_id),
  })
}
