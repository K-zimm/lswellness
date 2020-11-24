import React from 'react';

import Layout from '../../components/Layout';
import PodcastRoll from '../../components/PodcastRoll';

import HeroImg from '../../img/blog-hero.jpg';

class PodcastIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className='blogPage'>
          <div
            className='blogPage__hero'
            style={{
              backgroundImage: `url(${HeroImg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1
              className='hero-title'
              style={{
                boxShadow: '0.5rem 0 0 #20bedc, -0.5rem 0 0 #20bedc',
                backgroundColor: '#20bedc',
                color: 'white',
                padding: '1rem',
              }}
            >
              Tell Me Your Story Podcast
            </h1>
          </div>
          <section className='blogPage__container'>
            <div className='content'>
              <PodcastRoll />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default PodcastIndexPage;
