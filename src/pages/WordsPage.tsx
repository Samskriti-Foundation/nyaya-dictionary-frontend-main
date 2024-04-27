import { useParams } from "react-router-dom"
import WordDisplay from "../components/WordDisplay/WordDisplay"
import BaseLayout from "../layouts/BaseLayout"
import SearchBar from "../components/SearchBar/SearchBar"

export default function WordsPage() {
  const { word } = useParams() as { word: string }

  return (
    <BaseLayout>
      <SearchBar />
      <WordDisplay word={word} />
    </BaseLayout>
  )
}
