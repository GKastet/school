import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import Layout from './pages/Layout'
import './App.css'

const HomePage = lazy(()=> import ('./pages/HomePage'))
const GalleryPage = lazy(()=> import ('./pages/GalleryPage'))
const Presentation = lazy(()=> import ('./pages/Presentation'))

function App() {
  return (
    <>     
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path='/gallery' element={<GalleryPage/>}></Route>
            <Route path='/presentation' element={<Presentation/>}></Route>
            <Route path='*' element={<Navigate to='/'/>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
