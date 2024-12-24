import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [photoData, setPhotoData] = useState([]); 
  const fetchFromApi = () => {
    const clientID = '0oWmA29p5xRBLsK8-NiXk2FEdmS9_3Viksud3NBiHHw';
    const apiUrl = `https://api.unsplash.com/photos/?client_id=${clientID}`;

    useEffect(() => {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setPhotoData(data);
        })
        .catch(error => console.log('Error de datos de API:', error));
    }, []);
  };
  fetchFromApi();
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
      <ul>
        {photoData.map((photo) => (
          <li key={photo.id}>
            <img src={photo.urls.thumb} alt={photo.id} width={photo.width / 100} height={photo.height / 100} /> {photo.width}
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
