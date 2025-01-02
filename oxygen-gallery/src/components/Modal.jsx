import React from 'react';
import './modal.css'; // Import CSS for modal styling

const Modal = ({ selectedImage, isFavorite, handleCloseModal, handleDownload, handleFavorite }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={handleCloseModal}>×</button>
                <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} className="modal-image" />
                
                <div className="modal-info">
                    <h2>{selectedImage.alt_description || 'No description available'}</h2>
                    <p>{selectedImage.description || 'No detailed description available.'}</p>

                    <div className="modal-details">
                        <p><strong>Photographer:</strong> {selectedImage.user.name}</p>
                        <p><strong>Resolution:</strong> {selectedImage.width} x {selectedImage.height}</p>
                    </div>
                </div>

                <div className="modal-buttons">
                    <div className="modal-buttons-left">
                        {/* Download Button (Image) */}
                        <button className="modal-button" onClick={handleDownload}>
                            <img 
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fwhite-download-icon%2Fwhite-download-icon-4.jpg&f=1&nofb=1&ipt=e82808fe2e6d5e8dd7b7cd3b2b25ab8d0767d28ea68315f64bad46157ecd4eea&ipo=images"
                                alt="Download"
                            />
                        </button>

                        {/* Favorite Button (Image) */}
                        <button className="modal-favorite-button" onClick={handleFavorite}>
                            <img 
                                src={isFavorite ? 'https://cdn4.iconfinder.com/data/icons/essentials-73/24/029_-_Star-512.png' : 
                                'https://cdn4.iconfinder.com/data/icons/essentials-71/24/029_-_Star-512.png'} 
                                alt={isFavorite ? 'Favorited' : 'Not Favorited'} 
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;