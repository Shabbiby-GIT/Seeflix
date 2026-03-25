import React from 'react';
import Header from '../components/Header';
import MediaList from '../components/MediaList';
import Footer from '../components/Footer';
import { media } from '../data/media';

function Home() {
  // Filter for Home (trending/top subset or first few)
  const trendingMovies = media.filter(item => item.type === 'movie').slice(0, 6);
  const topShows = media.filter(item => item.type === 'tvshow').slice(0, 6);

  return (
    <div className="home page">
      <Header />
      <main className="home-content page-content">
        <MediaList title="Trending Movies" items={trendingMovies} />
        <MediaList title="Top TV Shows" items={topShows} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

