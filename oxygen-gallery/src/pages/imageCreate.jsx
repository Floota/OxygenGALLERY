import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectImages, selectImageStatus, selectImageError } from '../features/imageSlice';
import { fetchImages } from '../features/imagesThunk';
import './imageCreate.css';

export const ImageCreate = () => {
    const dispatch = useDispatch();

    const images = useSelector(selectImages);
    const status = useSelector(selectImageStatus);
    const error = useSelector(selectImageError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchImages());
        }
    }, [status, dispatch]);

    if (status === 'pending') {
        return <p>Loading...</p>;
    }

    if (status === 'rejected') {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="grid">
            {images.length === 0 ? (
                <p>No images available</p>
            ) : (
                <ul>
                    {images.map((image) => (
                        <div key={image.id}>
                            <img src={image.urls.thumb} 
                            alt={image.alt_description} 
                            width={image.width / 50} 
                            height={image.height / 50} 
                            className="photo"/>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ImageCreate