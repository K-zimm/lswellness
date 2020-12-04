import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import PodcastRoll from '../../components/PodcastRoll';

import PodcastThumb from '../../img/podcast-thumbnail.jpg';

class PodcastIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className='podcastPage'>
          <div className='podcastPage__hero'>
            <div className='podcastPage__hero--content-box'>
              <h1 className='hero-title'>
                TELL ME <span>Your Story</span>
              </h1>
              <div className='hero-subtitle'>With Lisa Strzoda</div>
              <p className='hero-content'>
                Tell Me Your Story is a podcast hosted by Lisa Strzoda, an AFPA
                Holistic Nutritionist and Co-Active Coach in training. Lisa will
                talk to entrepreneurs, creative visionaries, activists, and
                movers and shakers about what influences, events, and decisions
                helped them live out their destinies. Everyone has a story worth
                telling!
              </p>
              <Link to='/podcast/equipment-and-tools' className='hero-link'>
                Check out Equipment, tools, and other resources I use and
                mention in my Podcast!
              </Link>
            </div>
            <img src={PodcastThumb} className='podcast-thumb' />
          </div>
          <section className='podcastPage__container'>
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
