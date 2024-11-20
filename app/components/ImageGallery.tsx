"use client"
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // دالة للانتقال إلى الصورة التالية
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // دالة للانتقال إلى الصورة السابقة
  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'relative', textAlign: 'center', padding: '20px' }}>
      {/* عرض الصورة الحالية بحجم كبير */}
      <img
        src={images[currentIndex]}
        alt="Project Image"
        style={{
          width: '80%',
          height: 'auto',
          maxWidth: '1000px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      />
      
      {/* أزرار التنقل */}
      <button
        onClick={previousImage}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)',
          fontSize: '24px',
          padding: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '50%',
        }}
      >
        &#8592;
      </button>

      <button
        onClick={nextImage}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          transform: 'translateY(-50%)',
          fontSize: '24px',
          padding: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '50%',
        }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageGallery;
