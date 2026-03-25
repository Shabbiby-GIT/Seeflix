import React from 'react';
import MediaCard from './MediaCard';

function MediaList({ title, items }) {
  return (
    <section className="media-list">
      <h2 className="media-list-title">{title}</h2>
      <div className="media-list-container">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.title}
            cover={item.cover}
            rating={item.rating}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
}

export default MediaList;

