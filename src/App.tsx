import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import WordsPage from './pages/WordsPage'
import AboutPage from './pages/AboutPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<HomePage/>}/>
          <Route path = '/words/:word' element = {<WordsPage/>}/>
          <Route path = '/about' element = {<AboutPage/>}/>
          <Route path = "*" element = {<div>Invalid Page</div>}/>
        </Routes>
      </>
  )
}

export default App
