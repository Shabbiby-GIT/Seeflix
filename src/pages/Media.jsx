import React from 'react';
import MediaList from '../components/MediaList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { media } from '../data/media';

function Media() {
  // Filter movies and tvshows
  const movies = media.filter(item => item.type === 'movie');
  const tvshows = media.filter(item => item.type === 'tvshow');

  return (
    <div className="page">
      <Header />
      <main className="page-content media-page">
        <MediaList title="Movies" items={movies} />
        <MediaList title="TV Shows" items={tvshows} />
      </main>
      <Footer />
    </div>
  );
}

export default Media;

