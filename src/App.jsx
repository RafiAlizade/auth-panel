
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AdminLogin from './Components/AdminLogin/AdminLogin'
import AdminRegister from './Components/AdminRegister/AdminRegister'

function App() {

  return (
    <Routes>
      <Route path='/login' element={< AdminLogin />} />
      <Route path='/register' element={< AdminRegister />} />
    </Routes>
  )
}

export default App
