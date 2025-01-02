import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from './components/Layout.jsx';
import { Outlet } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="" element={<App />}></Route>
          <Route index path="/misfotos" element={<App />}></Route>
        </Route>
      </Routes>
  </BrowserRouter>
)
