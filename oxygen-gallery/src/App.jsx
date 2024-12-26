import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  const [photoData, setPhotoData] = useState([]); 
  const fetchFromApi = () => {
    const clientID = '0oWmA29p5xRBLsK8-NiXk2FEdmS9_3Viksud3NBiHHw';
    const apiUrl = `https://api.unsplash.com/photos/random?count=10&client_id=${clientID}`;

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
      <div>
      <ul>
        {/* <li>
          <h1>{photoData.id}</h1>
          <img src={photoData.urls.thumb}></img>
        </li> */}
        {photoData.map((photo) => (
          <li key={photo.id}>
            <img src={photo.urls.thumb} alt={photo.id} width={photo.width / 50} height={photo.height / 50} /> {photo.width}
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
