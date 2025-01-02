import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from './components/Layout.jsx';
import './index.css'
import { store } from './store/store.js';
import { ImageCreate } from './pages/imageCreate.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={ store }>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="" element={<ImageCreate />}></Route>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
)