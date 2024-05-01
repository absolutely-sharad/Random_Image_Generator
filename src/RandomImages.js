import React, { useState } from 'react';
// import './RandomImage.css'; // Import CSS file for styling
import './RandomImages.css'
function RandomImages() {
  const [imageUrl, setImageUrl] = useState('');
  const fetchRandomImage = async () => {
    try {
      const response = await fetch("https://source.unsplash.com/random");
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      const imageUrl = response.url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      {imageUrl && <img src={imageUrl} alt="Random Image" className="centered-image" />}
      <button onClick={fetchRandomImage} className='button'>Generate Image</button>
    </div>
  );
}

export default RandomImages;