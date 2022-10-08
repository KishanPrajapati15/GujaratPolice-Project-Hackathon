import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dasktop from './Pages/Dasktop';
import QrGenerate from './Pages/QrGenerate';
import Report from './Pages/Report';
import Home from './Pages/Home';
import Login from './Pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dasktop />} />
        <Route path='/qrGenerator' element={<QrGenerate />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </BrowserRouter>
  )
}
