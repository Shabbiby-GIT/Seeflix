import React from 'react';

function MediaCard({ title, cover, rating, type }) {
  return (
    <div className="media-card">
      <div className="media-card-cover">
        <img src={cover} alt={title} />
        <div className="media-card-rating">
          <span>⭐ {rating}</span>
        </div>
        <div className="media-card-type">
          {type === 'movie' ? '🎬 Movie' : '📺 TV Show'}
        </div>
      </div>
      <h3 className="media-card-title">{title}</h3>
    </div>
  );
}

export default MediaCard;

