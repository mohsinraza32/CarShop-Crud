import './App.css'
import './Components/CarShop.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CarShop } from './Components/CarShop'
import { CarList } from './Components/CarList'

function App() {

  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<CarShop/>}></Route>
           <Route path='/carlist' element={<CarList/>}></Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
