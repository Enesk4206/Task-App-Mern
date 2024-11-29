import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App.jsx'
import AddTask from './pages/AddTask'
import {Toaster} from "react-hot-toast"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/add-task' element={<AddTask />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  </StrictMode>,
)
