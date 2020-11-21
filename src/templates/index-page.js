import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRollFeatured from '../components/BlogRollFeatured';
import Mailchimp from '../components/Mailchimp';

import LogoBg from '../img/logo-bg.png';
import ContactBg from '../img/home-schedule-appointment.jpg';
import SignupBg from '../img/home-sign-up.jpg';

export const IndexPageTemplate = ({
  title,
  heroSection,
  profileImage,
  mainpitch,
  programs,
}) => (
  <div className='indexPage'>
    <div
      className='indexPage__hero'
      style={{
        backgroundImage: `url(${
          !!heroSection.image.childImageSharp
            ? heroSection.image.childImageSharp.fluid.src
            : heroSection.image
        })`,
        backgroundPosition: `center center`,
        backgroundAttachment: `fixed`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='indexPage__hero--box'>
        <div className='indexPage__hero--box-heading'>
          {heroSection.heading}
        </div>
        <div className='indexPage__hero--box-subheading'>
          {heroSection.subheading}
        </div>
        <Link
          className='indexPage__hero--box-cta'
          to={heroSection.ctaButton.link}
        >
          {heroSection.ctaButton.text}
        </Link>
      </div>
    </div>
    <section className='indexPage__meet-lisa'>
      <div
        className='indexPage__meet-lisa--gradient'
        style={{
          backgroundImage: `url(${
            !!profileImage.childImageSharp
              ? profileImage.childImageSharp.fluid.src
              : profileImage
          })`,
          backgroundPosition: `left center`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='gradient-inner'></div>
      </div>
      <div className='indexPage__meet-lisa--content'>
        <div className='content-container'>
          <h1 className='title'>{mainpitch.title}</h1>
          <p>{mainpitch.paragraph1}</p>
          <p>{mainpitch.paragraph2}</p>
          <Link className='link' to='/my-story'>
            my story
          </Link>
        </div>
      </div>
    </section>
    <section
      className='indexPage__programs'
      style={{
        backgroundImage: `url(${LogoBg})`,
        backgroundPosition: `-250px -400px`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '800px',
      }}
    >
      <Features gridItems={programs.programs} />
    </section>
    <section
      className='indexPage__contact'
      style={{
        background: `linear-gradient(rgba(236,28,45,.75),rgba(236,28,45,.75)), url(${ContactBg})`,
        backgroundPosition: `top center`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='indexPage__contact--schedule'>
        <h3 className='title'>Schedule an Appointment</h3>
        <p className='content'>
          Book a 30 minute Discovery Sessions and see if my program is right for
          you!
        </p>
        <a
          href='https://calendly.com/lisa-strzoda'
          target='__blank'
          className='btn'
        >
          schedule free session
        </a>
      </div>
      <div className='indexPage__contact--question'>
        <h3 className='title'>Have a Question?</h3>
        <p className='content'>
          I would be happy to help! Click the button below and fill out the
          form. I will send you a response via email shortly.
        </p>
        <Link className='btn' to='/contact'>
          ask a question
        </Link>
      </div>
    </section>
    <section className='indexPage__blogRoll'>
      <h2 className='indexPage__blogRoll--title'>Latest Posts</h2>
      <BlogRollFeatured />
    </section>
    <section
      className='indexPage__mailChimp'
      style={{
        backgroundImage: `url(${SignupBg})`,
        backgroundPosition: `center center`,
        backgroundAttachment: `fixed`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='form-box'>
        <h3 className='form-box__title'>
          Sign up for my newsletter and receive 5 free recipes!
        </h3>
        <Mailchimp />
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  heroSection: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mainpitch: PropTypes.object,
  programs: PropTypes.shape({
    programs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heroSection={frontmatter.heroSection}
        profileImage={frontmatter.profileImage}
        mainpitch={frontmatter.mainpitch}
        programs={frontmatter.programs}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heroSection {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          subheading
          ctaButton {
            text
            link
          }
        }
        profileImage {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          paragraph1
          paragraph2
        }
        programs {
          programs {
            title
            text
            btnText
            btnLink
          }
        }
      }
    }
  }
`;
