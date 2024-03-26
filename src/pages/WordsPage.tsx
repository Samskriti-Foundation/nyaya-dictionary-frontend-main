import {useParams} from "react-router-dom"
import WordDisplay from "../components/WordDisplay/WordDisplay";
import BaseLayout from "../layouts/BaseLayout";

export default function WordsPage() {
  const {word} = useParams()

  return (
    <BaseLayout>
      <WordDisplay word = {word}/>
    </BaseLayout>
  )
}
