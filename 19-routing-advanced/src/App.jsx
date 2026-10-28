import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'
import NotFound from './pages/NotFound'
import Women from './pages/women'
import CourseDetail from './pages/CourseDetail'
import Courses from './pages/Courses'

const App = () => {
  return (
    <div className='h-screen bg-black text-white relative' >
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CourseDetail/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='women' element={<Women/>}/>
        </Route>
        

        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App