import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/about' element = {<AboutPage/>}/>
      </Routes>
    </>
  )
}

export default App
