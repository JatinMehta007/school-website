
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { Navbar } from './assets/pages/Navbar'
import { About } from './assets/pages/About'
import { Academics } from './assets/pages/Academics'
import { Admission } from './assets/pages/Admission'
import { Faculty } from './assets/pages/Faculty'
import { Students } from './assets/pages/Students'
import { Gallery } from './assets/pages/Gallery'
import { Contact } from './assets/pages/Contact'


function App() {
    return (
      <>

      <BrowserRouter>
      <Routes>
         <Route path="/" element ={<Navbar/>} /> 
        
        <Route path='/about' element={<About />} />
        <Route path='/academics' element={<Academics />}/>
        
        
        <Route path='/admission' element={<Admission/>}></Route>
        <Route path='/faculty' element={<Faculty/>}></Route>
        <Route path='/students' element={<Students/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      {/* <Navbar>
        </Navbar>
        <Home/>
        <About/>
        <Academics/>
        <Admission/>
        <Faculty/>
        <Students/>
        <Gallery/> */}
        {/* <Contact/> */}
      </BrowserRouter>
      
      </>
/* <>
      <div>
        <Navbar>
        </Navbar>
        <Home/>
        <About/>
        <Academics/>
        <Admission/>
        <Faculty/>
        <Students/>
        <Gallery/>
        <Contact/>
      </div>
  </> */
    )
}

export default App
