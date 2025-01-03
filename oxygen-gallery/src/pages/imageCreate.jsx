import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectImages, selectImageStatus, selectImageError } from '../features/imageSlice';
import { fetchImages } from '../features/imagesThunk';
import './imageCreate.css';
import Modal from '../components/Modal';

export const ImageCreate = () => {
    const dispatch = useDispatch();

    const images = useSelector(selectImages)
    const status = useSelector(selectImageStatus)
    const error = useSelector(selectImageError)

    const [selectedImage, setSelectedImage] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchImages())
        }
    }, [status, dispatch]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
        setIsFavorite(false); 
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDownload = () => {
        const downloadUrl = selectedImage.urls.raw;
        const a = document.createElement('a')
        a.href = downloadUrl
        a.download = selectedImage.id + ".jpg"
        a.click()
    }

    const handleFavorite = () => {
        setIsFavorite((prev) => !prev)
    }

    if (status === 'pending') {
        return <p>Loading...</p>
    }

    if (status === 'rejected') {
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <div className="grid">
                {images.length === 0 ? (
                    <p>No images available</p>
                ) : (
                    <ul>
                        {images.map((image) => (
                            <div key={image.id} onClick={() => handleImageClick(image)}>
                                <img src={image.urls.thumb} 
                                    alt={image.alt_description} 
                                    width={image.width / 50} 
                                    height={image.height / 50} 
                                    className="photo" />
                            </div>
                        ))}
                    </ul>
                )}
            </div>
            {isModalOpen && selectedImage && (
                <Modal 
                    selectedImage={selectedImage} 
                    isFavorite={isFavorite} 
                    handleCloseModal={handleCloseModal} 
                    handleDownload={handleDownload} 
                    handleFavorite={handleFavorite}
                />
            )}
        </div>
    )
}

export default ImageCreate;
