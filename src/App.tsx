import './App.css'
import HomePage from './pages/HomePage'
import WordsPage from './pages/WordsPage'
import AboutPage from './pages/AboutPage'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
      <>
        <Routes>
          <Route path = '/' element = {<HomePage/>}/>
          <Route path = '/words/' element = {<HomePage/>}/>
          <Route path = '/words/:word' element = {<WordsPage/>}/>
          <Route path = '/about' element = {<AboutPage/>}/>
          <Route path = "*" element = {<NotFoundPage/>}/>
        </Routes>
      </>
  )
}

export default App
