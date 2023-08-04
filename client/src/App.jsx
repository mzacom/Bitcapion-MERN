import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {BillingsB,Dashboard,Deposits,Help,Loans,NotFound,Plans,Start,Stats,Authentication,Login,Register} from './Pages'


import { Navbar } from './components'




const App = () => {
  return (
    
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Dashboard/>}/>
      <Route path='auth' element={<Authentication/>}/>
      <Route path='stats' element={<Stats/>}/>
      <Route path='plans' element={<Plans/>}/>
      <Route path='deposit' element={<Deposits/>}/>
      <Route path='loans' element={<Loans/>}/>
      <Route path='start' element={<Start/>}/>
      <Route path='billing' element={<BillingsB/>}/>
      <Route path='register' element={<Register/>}/>
     
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App