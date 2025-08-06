import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import PageNotFound from './Pages/PageNotFound'
import Footer from './Components/Footer'
import HeadFile from './Components/HeadFile'

function App() {

  return (
    <>
      <HeadFile/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
