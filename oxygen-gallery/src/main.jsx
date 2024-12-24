import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import { Outlet } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
      <Route index path="/" element={<App />}></Route>
      </Routes>
  </BrowserRouter>
)
