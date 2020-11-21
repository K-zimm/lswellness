import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Mailchimp from '../components/Mailchimp';

import LogoBg from '../img/logo-bg.png';

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  headerImage,
  storyImage,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className='aboutPage'>
      <div
        className='aboutPage__hero'
        style={{
          backgroundImage: `url(${
            !!headerImage.childImageSharp
              ? headerImage.childImageSharp.fluid.src
              : headerImage.image
          })`,
          backgroundPosition: `center center`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <section
        className='aboutPage__content'
        style={{
          backgroundImage: `url(${LogoBg})`,
          backgroundPosition: `bottom -200px left -250px`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '800px',
        }}
      >
        <h1 className='title'>{title}</h1>
        <div className='content-image'>
          <PreviewCompatibleImage imageInfo={storyImage.image} />
        </div>
        <PageContent className='content' content={content} />
      </section>
      <section className='mailchimp-horizontal'>
        <div className='form-box'>
          <h3 className='form-box__title'>
            Sign up for my newsletter and receive 5 free recipes!
          </h3>
          <Mailchimp />
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  storyImage: PropTypes.shape({
    alt: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        headerImage={post.frontmatter.headerImage}
        storyImage={post.frontmatter.storyImage}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        headerImage {
          childImageSharp {
            fluid(maxWidth: 1731, quality: 92) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        storyImage {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
