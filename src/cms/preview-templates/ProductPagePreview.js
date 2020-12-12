import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  /*image,
  title,
  heading1,
  content1,
  heading2,
  content2,
  products,
  cta,*/

  return (
    <ProductPageTemplate
      image = {getAsset(data.image)}
      title = {data.title}
      heading1 = {data.heading1}
      content1 = {data.content1}
      heading2 = {data.heading2}
      content2 = {data.content2}
      products = {data.products || { programs: [] }}
      cta = {data.cta}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProductPagePreview
