import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Mailchimp from '../components/Mailchimp';

import LogoBg from '../img/logo-bg.png';
import ContactBg from '../img/home-schedule-appointment.jpg';

export const ProductPageTemplate = ({
  image,
  title,
  heading1,
  content1,
  heading2,
  content2,
  products,
  cta,
  testimonials,
}) => (
  <div className='productPage'>
    <div
      className='productPage__hero'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
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
        {title}
      </h1>
    </div>
    <div
      style={{
        backgroundImage: `url(${LogoBg})`,
        backgroundPosition: `bottom -200px left -250px`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '800px',
        paddingBottom: '5rem',
      }}
    >
      <section className='productPage__content'>
        <h2 className='heading-2'>{heading1}</h2>
        <div className='content'>{content1}</div>
        <h2 className='heading-2'>{heading2}</h2>
        <div className='content'>{content2}</div>
      </section>
      <section className='productPage__programs'>
        {products.map((item, index) => (
          <div key={item.text} className='programs__row' id={`program${index}`}>
            <h2 className='programs__row--title'>{item.title}</h2>
            <div className='programs__row--content'>
              <p>{item.text}</p>
              <ul className='program-features'>
                {item.features
                  ? item.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))
                  : ''}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <section className='productPage__cta'>
        <h3>{cta.heading}</h3>
        <div className='content'>{cta.description}</div>
        <a href={cta.btnLink} target='_blank' className='btn' rel='noreferrer'>
          {cta.btnText}
        </a>
      </section>
    </div>
    <section
      className='productPage__contact'
      style={{
        background: `linear-gradient(rgba(236,28,45,.75),rgba(236,28,45,.75)), url(${ContactBg})`,
        backgroundPosition: `top center`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='productPage__contact--schedule'>
        <h3 className='title'>Schedule an Appointment</h3>
        <p className='content'>
          Book a 30 minute Discovery Sessions and see if my program is right for
          you!
        </p>
        <a
          href='https://calendly.com/lisa-strzoda'
          target='__blank'
          className='btn'
          rel='noreferrer'
        >
          schedule free session
        </a>
      </div>
      <div className='productPage__contact--question'>
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

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  heading2: PropTypes.string,
  content2: PropTypes.string,
  products: PropTypes.array,
  cta: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    btnText: PropTypes.string,
    btnLink: PropTypes.string,
  }),
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading1={frontmatter.heading1}
        content1={frontmatter.content1}
        heading2={frontmatter.heading2}
        content2={frontmatter.content2}
        products={frontmatter.products}
        cta={frontmatter.cta}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading1
        content1
        heading2
        content2
        products {
          title
          text
          features
        }
        cta {
          heading
          description
          btnText
          btnLink
        }
      }
    }
  }
`;
