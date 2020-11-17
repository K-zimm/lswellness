import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import Mailchimp from '../components/Mailchimp';

import LogoBg from '../img/logo-bg.png';
import ContactBg from '../img/home-schedule-appointment.jpg';
import SignupBg from '../img/home-sign-up.jpg';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  ctaButton,
  profileImage,
  mainpitch,
  description,
  intro,
}) => (
  <div className='indexPage'>
    <div
      className='indexPage__hero'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center center`,
        backgroundAttachment: `fixed`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='indexPage__hero--box'>
        <div className='indexPage__hero--box-heading'>{heading}</div>
        <div className='indexPage__hero--box-subheading'>{subheading}</div>
        <Link className='indexPage__hero--box-cta' to={ctaButton.link}>
          {ctaButton.text}
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
          <p>{mainpitch.description}</p>
          <p>{description}</p>
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
      <Features gridItems={intro.blurbs} />
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
      <BlogRoll />
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  ctaButton: PropTypes.object,
  profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        ctaButton={frontmatter.ctaButton}
        profileImage={frontmatter.profileImage}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        profileImage {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            title
            text
            btnText
            btnLink
          }
          heading
          description
        }
      }
    }
  }
`;
