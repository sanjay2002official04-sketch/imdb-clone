import React from 'react';
// The logo import is usually for the boilerplate. Keeping it commented out if you don't need it.
// import logo from './logo.svg'; 
import MovieCard from './MovieCard';
import './App.css'; // Assuming this includes the styles for the MovieCard component

function App() {
  const movieData = [
    {
      id: 1,
      title: 'The Great Adventure',
      year: '1975',
      imageUrl: 'https://m.media-amazon.com/images/I/71ImBV+WHYL._UF1000,1000_QL80_.jpg',
      rating: 4.0,
    },
    {
      id: 2,
      title: 'Silent Night',
      year: '2023',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67nxh9mmrZYESOy6-S9ryPmlo3IszaBHVag&s',
      rating: 5.3,
    },
    {
      id: 3,
      title: 'New Horizons',
      year: '2024',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjhlYjA4NjEtNzBkZC00MGE1LTg0MDEtYjdiMDI1ZDU4YThmXkEyXkFqcGc@._V1_.jpg',
      rating: 6.5,
    },
  ];

  return (
    <div className="app-container">
      <h1>🎬 Movie Showcase</h1>
      <div className="movie-list">
        {/* Map over the movieData array to render a MovieCard for each item */}
        {movieData.map(movie => (
          <MovieCard
            key={movie.id} // Key is essential for list rendering efficiency in React
            title={movie.title}
            year={movie.year}
            imageUrl={movie.imageUrl}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;