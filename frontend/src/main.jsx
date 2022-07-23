import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Application } from './pages/Application';
import { Landing } from './pages/Landing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main'> {/* Apply global styles with the main class */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<Application />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
)
