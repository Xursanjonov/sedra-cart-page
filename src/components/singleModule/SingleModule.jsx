import React, { useEffect } from 'react';
import './singleModule.scss';

const SingleModule = ({ product, setShowModule }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 

    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);

  const handleClose = () => {
    setShowModule(false);
  };

  if (!product) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>X</button>
        <h2>{product.title}</h2>
        <img src={product.urls[0]} alt={`Product image`} className="product-image" />
        <p>{product.description ? product.description : 'No description available'}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default SingleModule;
