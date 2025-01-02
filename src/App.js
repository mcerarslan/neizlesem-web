import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

require('dotenv').config();

function App() {

  const API_URL = "https://api.themoviedb.org/3"

  const fetchMovies = async () => {
    const data = await axios.get(`${API_URL}/discover/movie`,{
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }
    })

    console.log('data',data);

  }

  useEffect(() => {
    fetchMovies()

  }, []) 

  return (
    <div className="App">
          <h1>Hello world</h1>
    </div>
  );
}

export default App;
