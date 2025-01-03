import React, { useEffect, useState } from 'react';
import './misFotos.css';

const FavoriteImagesPage = () => {
    const [favoritedImages, setFavoritedImages] = useState([])

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favoritedImages')) || [];
        setFavoritedImages(storedFavorites)
    }, []);

    if (favoritedImages.length === 0) {
        return <p>No favorite images found.</p>
    }

    return (
        <div>
            <h2>Your Favorited Images</h2>
            <div className="grid">
                {favoritedImages.map((imageId) => (
                    <div key={imageId} className="image-item">
                        <img
                            src={`https://source.unsplash.com/${imageId}/400x300`}
                            alt="Favorited Image"
                            className="photo"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoriteImagesPage