import React from 'react';
import './MovieCard.css';

/**
 * A reusable component to display a single movie card.
 * @param {object} props - The props object containing movie details.
 * @param {string} props.title - The title of the movie.
 * @param {string} props.year - The release year.
 * @param {string} props.imageUrl - The URL for the movie poster/image.
 * @param {number} props.rating - The IMDB or average rating.
 */
function MovieCard({ title, year, imageUrl, rating }) {
  // Simple check for rating display
  const ratingDisplay = rating ? `Rating: ⭐ ${rating} / 10` : 'No rating available';

  return (
    <div className="movie-card">
      <div className="movie-card__image-container">
        <img src={imageUrl} alt={`Poster for ${title}`} className="movie-card__image" />
      </div>
      <div className="movie-card__info">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__detail">**Release Year:** {year}</p>
        <p className="movie-card__detail">{ratingDisplay}</p>
        <button className="movie-card__button">View Details</button>
      </div>
    </div>
  );
}

export default MovieCard;