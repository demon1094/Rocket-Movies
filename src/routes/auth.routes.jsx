import { Routes, Route } from 'react-router-dom'

import { Register } from '../pages/Register'
import { LogIn } from '../pages/LogIn'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <LogIn /> } />
      <Route path="/Register" element={ <Register /> } />
    </Routes>
  )
}