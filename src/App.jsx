
import { BrowserRouter, Router } from 'react-router-dom'
import './App.css'
import Home from './assets/page/home/home'
function App() {

  return (
    <>
    <BrowserRouter>
    <Router path='/' element={<Home/>}/>

    </Router>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
