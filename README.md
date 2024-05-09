# Random Image Generator

This repository contains a simple React project for generating random images from the Unsplash API.

## Project Structure

The project consists of two main files:

1. **RandomImages.js**: This file contains the functional component `RandomImages`, responsible for fetching a random image from the Unsplash API and displaying it on the page. It utilizes React Hooks (`useState`) for managing state and performs asynchronous data fetching using the `fetch` API.

2. **App.js**: This file imports and renders the `RandomImages` component within the main application. It also includes a title for the application.

## Components

### RandomImages.js

#### Functions
- **fetchRandomImage**: This asynchronous function fetches a random image from the Unsplash API. Upon successful fetching, it updates the `imageUrl` state with the URL of the fetched image.

#### Usage

```jsx
<RandomImages/>
import React, { useState } from 'react';
import './RandomImages.css';

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
```

---------------------------------------------------------------------------------------------------------------------------------------------

```jsx
<App/>
import RandomImages from "./RandomImages";
import './App.css';

function App() {
  return (
    <div className="App">
    <h1><i>Random Image Generator</i></h1>
    <RandomImages/>
    </div>
  );
}

export default App;
```

#### Getting Started
- To run the project locally:

#### Clone this repository to your local machine.
- Install dependencies using npm install.
- Start the development server using npm start.
- Access the application in your browser at http://localhost:3000.

#### Technologies Used
- React
- jsPDF
- CSS Modules

### Author
[Sharad Singh Kushwaha]
