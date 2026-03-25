import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="page">
      <Header />
      <main className="page-content about-page">
        <section className="about-hero">
          <h1 className="about-title">Welcome to Seeflix</h1>
          <p className="about-subtitle">
            Your ultimate destination for movies and TV shows. Discover, watch, and enjoy the best entertainment content from around the world.
          </p>
        </section>
        
        <section className="about-mission">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            At Seeflix, we believe everyone deserves access to high-quality entertainment. Our mission is to connect passionate viewers with exceptional content,
            providing personalized recommendations and seamless streaming experience that brings people together through stories that matter.
          </p>
          <div className="mission-features">
            <div className="feature">
              <h3>Premium Content</h3>
              <p>Curated selection of movies and series</p>
            </div>
            <div className="feature">
              <h3>Smart Recommendations</h3>
              <p>AI-powered suggestions just for you</p>
            </div>
            <div className="feature">
              <h3>Multi-Device</h3>
              <p>Watch anywhere, anytime</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;

