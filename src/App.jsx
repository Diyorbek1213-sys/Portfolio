import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './components/Home'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout><Home /></MainLayout>} />
      </Routes>
    </div>
  )
}

export default App